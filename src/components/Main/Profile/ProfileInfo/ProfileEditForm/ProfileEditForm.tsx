import React from 'react';
import {Form, Formik} from "formik";
import classNames from "classnames";
import {MyTextInput} from "../../../../common/FormikFormsBuild/FormikFormsBuild";
import style from './profileEditForm.module.scss'
import {IProfile} from "../../../../../types/IProfile";

interface Props {
    exitToEditMode: () => void
    profile: IProfile
    updateProfileInfo: (profileData: IProfile) => void
}

function ProfileEditForm({exitToEditMode, profile, updateProfileInfo}: Props) {
    return (
        <Formik
            initialValues={profile}
            onSubmit={(formData) => {
                updateProfileInfo(formData)
            }}
        >
            <Form>
                <div className={style.infoItem}> Full Name:
                    <MyTextInput
                        name='fullName'
                        placeholder="Full Name"
                        className={classNames("inputPlace", style.inputItem)}
                    />
                </div>
                <div className={style.infoItem}>About Me:
                    <MyTextInput
                        className={classNames("inputPlace", style.inputItem)}
                        placeholder='About Me'
                        name='aboutMe'
                    />
                </div>
                <div className={classNames(style.infoItem, style.checkbox)}>Looking for a job:
                    <MyTextInput
                        type='checkbox'
                        name='lookingForAJob'/>
                </div>
                <div className={style.infoItem}>Description job:
                    <MyTextInput
                        className={classNames("inputPlace", style.inputItem)}
                        name='lookingForAJobDescription'
                        placeholder='Your professional skills'
                    />
                </div>
                {Object.keys(profile.contacts).map((key) => <ContactsForm key={key} contactTitle={key} />)}
                <div className={style.buttonsBlock}>
                    <button type='button' className="button">Save</button>
                    <button type='button' className="button" onClick={exitToEditMode}>Exit</button>
                </div>
            </Form>
        </Formik>
    );
}

interface PropsContactsForm {
    contactTitle: string
}
function ContactsForm({contactTitle}: PropsContactsForm) {
    return <div className={style.infoItem}>
        <span>{contactTitle}:</span>
        <MyTextInput className={classNames("inputPlace", style.inputItem)}
                     name={`contacts.${  contactTitle}`}/>
    </div>
}

export default ProfileEditForm;