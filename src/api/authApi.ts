import {instance} from "./baseApi";
import {IResponse} from "../types/IResponse";
import {IDataAuthMe} from "../types/IDataAuthMe";

interface DataLogin {
    userId: number
}

export const authApi = {
    authMe() {
        return instance.get<IResponse<IDataAuthMe>>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe ?: boolean, captcha ?: boolean) {
        return instance.post<IResponse<DataLogin>>(`auth/login`, {email, password, rememberMe,captcha}).then(res => res.data)
    },
    logout() {
        return instance.delete<IResponse>('auth/login').then(res => res.data)
    }
}