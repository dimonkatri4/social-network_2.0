import React from 'react';
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import style from './createPost.module.scss';
import {addPost} from '../../../../store/profileSlice';
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {MyTextarea} from "../../../common/FormikFormsBuild/FormikFormsBuild";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CreatePost = () => {

    const dispatch = useAppDispatch()
    const profileOwner = useAppSelector(state => state.profile.profileOwner)

    return (
        <div className={`${style.profile_block} profile_block`}>
            <div className={style.create_post}>
                {Object.keys(profileOwner).length &&
                <img className={style.ava} src={profileOwner.photos.small} alt="avatar"/>}
                <Formik
                    initialValues={{
                        messageText: ''
                    }}
                    validationSchema={Yup.object({
                        messageText: Yup.string().required('Is area required!')
                    })}
                    onSubmit={({messageText}, {resetForm}) => {
                        dispatch(addPost(messageText))
                        resetForm()
                    }}
                >
                    <Form>
                        <div className={style.inputText}>
                            <MyTextarea name='messageText' placeholder="write something"/>
                            <div className={style.panel}>
                                <span className={style.iconPanel}><FontAwesomeIcon icon="music"/></span>
                                <span className={style.iconPanel}><FontAwesomeIcon icon="image"/></span>
                                <span className={style.iconPanel}><FontAwesomeIcon icon="video"/></span>
                                <span className={style.iconPanel}><FontAwesomeIcon icon="camera"/></span>
                                <button className="button">Publish</button>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default CreatePost;