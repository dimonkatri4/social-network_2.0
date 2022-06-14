import { AppDispatch } from './store'
import { profileApi } from '../api/profileApi'
import {
    changeEditModeProfile,
    savePhotoSuccess,
    setErrorInStatus,
    setOwnerProfile,
    setUsersProfile,
    setUsersStatus,
    updateProfileInfoSuccess,
} from './profileSlice'
import { IProfile } from '../types/IProfile'

export const getProfile = (userId: number) => async (dispatch: AppDispatch) => {
    const data = await profileApi.getProfile(userId)
    dispatch(setUsersProfile(data))
}

export const getOwnerProfile = (userId: number) => async (dispatch: AppDispatch) => {
    const data = await profileApi.getProfile(userId)
    dispatch(setOwnerProfile(data))
}

export const getStatus = (userId: number) => async (dispatch: AppDispatch) => {
    const data = await profileApi.getStatus(userId)
    dispatch(setUsersStatus(data))
}

export const updateStatus = (status: string) => async (dispatch: AppDispatch) => {
    try {
        const data = await profileApi.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(setUsersStatus(status))
            dispatch(setErrorInStatus(null))
        } else {
            const errorMessage = data.messages.length > 0 ? data.messages[0] : 'Other Error'
            dispatch(setErrorInStatus(errorMessage))
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        dispatch(setErrorInStatus(`Problem with server. Status Code: ${error.response.status}`))
    }
}
export const savePhoto = (photo: File) => async (dispatch: AppDispatch) => {
    const data = await profileApi.updatePhoto(photo)
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data))
    }
}

export const updateProfileInfo = (profile: IProfile) => async (dispatch: AppDispatch) => {
    const data = await profileApi.updateProfileInfo(profile)
    if (data.resultCode === 0) {
        dispatch(updateProfileInfoSuccess(profile))
        dispatch(changeEditModeProfile(false))
    } else {
        const errorMessage = data.messages.length > 0 ? data.messages[0] : 'Other Error'
        alert(errorMessage)
    }
}
