import React, {useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {useSelector} from "react-redux";
import Profile from './Profile'
import { useAppDispatch} from '../../../hooks/redux'
import {getProfile, getStatus} from '../../../store/profileThunks'
import {getIsAuthSelector, getUserIdSelector} from "../../../store/selectors/auth-selectors";


function ProfileContainer() {
    const dispatch = useAppDispatch()
    const isAuth = useSelector(getIsAuthSelector)
    const userId = useSelector(getUserIdSelector)
    const navigate = useNavigate()
    const params = useParams()

    const profileId: number | null = params.userId ? parseInt(params.userId, 10) : userId || null

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

    useEffect(() => {
        if (!isAuth) {
            navigate('/login')
        }
    }, [isAuth])
    return <Profile isOwner={!params.userId} />
}

export default ProfileContainer
