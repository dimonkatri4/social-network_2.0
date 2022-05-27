import React, {useEffect} from 'react'
import Profile from "./Profile";
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {getProfile, getStatus} from '../../../store/profileThunks';

const ProfileContainer = () => {

    const dispatch = useAppDispatch()
    const {isAuth, userId} = useAppSelector(state => state.auth)

    let navigate = useNavigate()
    let params = useParams()

    let profileId: number | null = params.userId ? parseInt(params.userId, 10) :
        userId ? userId : null

    const refreshProfile = () => {
        if (profileId) {
            dispatch(getProfile(profileId))
            dispatch(getStatus(profileId))
        } else {
            navigate('/login')
        }
    }

    useEffect(() => {
        refreshProfile()
    }, [profileId])

    return <Profile isAuth={isAuth} profileId={profileId}/>
}

export default ProfileContainer
