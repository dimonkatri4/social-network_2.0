interface UserContacts {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export interface IPhotos {
    small: string
    large: string
}

export interface IProfile {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: UserContacts
    photos: IPhotos
}