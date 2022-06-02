import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Profile from './Profile'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { getProfile, getStatus } from '../../../store/profileThunks'

function ProfileContainer() {
    const dispatch = useAppDispatch()
    const { isAuth, userId } = useAppSelector((state) => state.auth)
    const profile = useAppSelector((state) => state.profile)

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

    return <Profile isAuth={isAuth} profile={profile} isOwner={!params.userId} />
}

export default ProfileContainer
