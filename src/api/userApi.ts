import {instance} from './baseApi'
import {ResponseUser} from '../types/IUser'

export const getUser = (
    pageSize: number,
    currentPage: number,
    friends: boolean | null = null,
    term = ''
) => {
    const urlParameter = `users?count=${pageSize}&page=${currentPage}`
        + (term === '' ? '' : `&term=${term}`)
        + (friends === null ? '' : `&friend=${friends}`)
    return instance.get<ResponseUser>(urlParameter).then((response) => response.data)
}
