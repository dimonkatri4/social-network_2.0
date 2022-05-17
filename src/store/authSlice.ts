import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {captchaApi} from "../api/captchaApi";
import {AppDispatch} from "./store";

let initialState = {
    userId: null as number | null,
    email: '',
    login: '',
    isAuth: false,
    captchaUrl: '' as string | null
}

type InitialState = typeof initialState
type AuthUserData = Omit<InitialState, 'captchaUrl'>

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthUserData: (state, action:PayloadAction<AuthUserData>) => {
            state.userId = action.payload.userId
            state.email = action.payload.email
            state.login = action.payload.login
            state.isAuth = action.payload.isAuth
        },
        getCaptchaUrlSuccess: (state, action: PayloadAction<string | null>) => {
            state.captchaUrl = action.payload
        }
    }
})

export const {setAuthUserData, getCaptchaUrlSuccess} = authSlice.actions
export default authSlice.reducer

export const getCaptchaUrl = () => async (dispatch: AppDispatch) => {
    const data = await captchaApi.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}