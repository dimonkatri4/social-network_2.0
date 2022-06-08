import React from 'react';
import ProfileInfo from "./ProfileInfo";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {updateProfileInfo} from "../../../../store/profileThunks";
import {IProfile} from "../../../../types/IProfile";
import { changeEditModeProfile } from '../../../../store/profileSlice';
import {useParams} from "react-router-dom";

const ProfileInfoContainer = () => {

    const {profile, editModeProfile} = useAppSelector(state => state.profile)
    const dispatch = useAppDispatch()
    const params = useParams()

    const changeEditModeProfileD = (value: boolean) => {
        dispatch(changeEditModeProfile(value))
    }

    return (
        <ProfileInfo profile={profile} editModeProfile={editModeProfile}
                     changeEditModeProfile={changeEditModeProfileD} isOwner={!params.userId} />
    );
};

export default ProfileInfoContainer;