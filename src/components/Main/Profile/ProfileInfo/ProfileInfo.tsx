import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import style from './profileInfo.module.scss'
import {IProfile, IUserContacts} from "../../../../types/IProfile";
import ProfileEditForm from "./ProfileEditForm/ProfileEditForm";

interface PropsProfileInfo {
    profile: IProfile
    editModeProfile: boolean
    changeEditModeProfile: (value: boolean) => void
    updateProfileInfo: (profileData: IProfile) => void
    isOwner: boolean
}

function ProfileInfo({profile, editModeProfile, changeEditModeProfile, isOwner, updateProfileInfo}: PropsProfileInfo) {

    const goToEditMode = () => {
        changeEditModeProfile(true)
    }
    const exitToEditMode = () => {
        changeEditModeProfile(false)

    }

    if (!Object.keys(profile).length) {
        return <div />
    }

    return (
        <div className={classNames(style.profileInfo, 'profile_block')}>
            <div className="caption">
                <h3 className="title">Profile Info</h3>
            </div>
            {editModeProfile ? <ProfileEditForm
                    exitToEditMode={exitToEditMode}
                    profile={profile}
                    updateProfileInfo={updateProfileInfo}
                /> :
                <ProfileData profile={profile} isOwner={isOwner} goToEditMode={goToEditMode}/>}
        </div>
    );
}

interface PropsProfileData {
    profile: IProfile
    isOwner: boolean
    goToEditMode: () => void
}

function ProfileData({profile, isOwner, goToEditMode}: PropsProfileData) {
    return <div>
        <div className={style.profileInfoTitle}>
            About Me: <span className={style.profileInfoValue}>{profile.aboutMe}</span>
        </div>
        <div className={style.profileInfoTitle}>
            Looking for a job:
            <span className={style.profileInfoValue}>{profile.lookingForAJob ? "Yes" : "No"}</span>
        </div>
        {profile.lookingForAJobDescription &&
        <div className={style.profileInfoTitle}>Description job:
            <span className={style.profileInfoValue}>{profile.lookingForAJobDescription}</span></div>}
        <div className={style.contacts}>
            {
                Object.keys(profile.contacts).map((key) => profile.contacts[key as keyof IUserContacts] &&
                        <Contacts key={key} contactTitle={key as keyof IUserContacts}
                                  contactValue={profile.contacts[key as keyof IUserContacts]}/>)}
        </div>
        {isOwner && <div className={style.editButton}>
            <button type='button' className="button" onClick={goToEditMode}>Edit Profile</button>
        </div>}
    </div>
}

interface PropsContacts {
    contactTitle: keyof IUserContacts
    contactValue: string
}

function Contacts({contactTitle, contactValue}: PropsContacts) {
    const contactsIcon = {
        facebook: ["fab", "facebook-square"],
        github: ["fab", "github-square"],
        instagram: ["fab", "instagram"],
        mainLink: ["fas", "link"],
        twitter: ["fab", "twitter-square"],
        vk: ["fab", "vk"],
        website: ["fas", "globe-americas"],
        youtube: ["fab", "youtube"]
    }
    return <div className={style.contact}>
        {contactValue && <div><a className={style.contactIcon} href={contactValue} title={contactTitle} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={contactsIcon[contactTitle] as IconProp}/>
        </a></div>}
    </div>
}

export default ProfileInfo;