export interface Photos {
    small: string
    large: string
}

export interface IUser {
    id: number
    name: string
    status: string
    photos: Photos
    followed: boolean
}