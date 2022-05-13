import { instance } from './baseApi'

interface ResponseCaptcha {
    url: string;
}

export const captchaApi = {
    getCaptchaUrl() {
        return instance.get<ResponseCaptcha>(`security/get-captcha-url`).then((res) => res.data)
    },
}
