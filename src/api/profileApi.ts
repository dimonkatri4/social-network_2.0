import {instance} from "./baseApi";
import {IProfile} from "../types/IProfile";
import {IResponse} from "../types/IResponse";

interface DataUpdatePhoto {
    small: string | null
    large: string | null
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<IProfile>(`profile/${  userId}`).then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${  userId}`).then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<IResponse>(`profile/status`, {status}).then(res => res.data)
    },
    updatePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put<IResponse<DataUpdatePhoto>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    },
    updateProfileInfo(profile: IProfile) {
        return instance.put<IResponse>(`profile/`, {...profile}).then(res => res.data)
    }
}