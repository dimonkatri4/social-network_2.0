import React from 'react'
import { useParams } from 'react-router-dom'
import ProfileInfo from './ProfileInfo'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { updateProfileInfo } from '../../../../store/profileThunks'
import { IProfile } from '../../../../types/IProfile'
import { changeEditModeProfile } from '../../../../store/profileSlice'

function ProfileInfoContainer() {
    const { profile, editModeProfile } = useAppSelector((state) => state.profile)
    const dispatch = useAppDispatch()
    const params = useParams()

    const changeEditModeProfileDispatch = (value: boolean) => {
        dispatch(changeEditModeProfile(value))
    }

    const updateProfileInfoDispatch = (profileData: IProfile) => {
        dispatch(updateProfileInfo(profileData))
    }

    return (
        <ProfileInfo
            profile={profile}
            editModeProfile={editModeProfile}
            changeEditModeProfile={changeEditModeProfileDispatch}
            updateProfileInfo={updateProfileInfoDispatch}
            isOwner={!params.userId}
        />
    )
}

export default ProfileInfoContainer
