import {AppDispatch} from "./store";
import {authApi} from "../api/authApi";
import {getCaptchaUrlSuccess, setAuthUserData} from "./authSlice";
import {getOwnerProfile} from "./profileThunks";
import {captchaApi} from "../api/captchaApi";


export const getAuthUserData = () => async (dispatch: AppDispatch) => {
    const data = await authApi.authMe()
    if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData({userId: id, email, login, isAuth: true}))
        dispatch(getOwnerProfile(id))
    }
}

export const login = (userLogin: string, password: string, rememberMe?: boolean, captcha?: string) =>
    async (dispatch: AppDispatch) => {
        const data = await authApi.login(userLogin, password, rememberMe, captcha)
        if (data.resultCode === 0) {
            dispatch(getAuthUserData())
            dispatch(getCaptchaUrlSuccess(null))
        } else if (data.resultCode === 10) {
            dispatch(getCaptchaUrl())
            let errorMessage = data.messages.length > 0 ? data.messages[0] : "Other Error"
            alert(errorMessage)
        } else {
            let errorMessage = data.messages.length > 0 ? data.messages[0] : "Other Error"
            alert(errorMessage)
        }
    }

export const logout = () => async (dispatch: AppDispatch) => {
    const data = await authApi.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData({userId: null, email: '', login: '', isAuth: false}))
    }
}
export const getCaptchaUrl = () => async (dispatch: AppDispatch) => {
    const data = await captchaApi.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}