import { instance } from './baseApi'
import { IResponse } from '../types/IResponse'

export const postFollow = (userId: number) =>
    instance.post<IResponse>(`follow/${userId}`).then((response) => response.data)

export const deleteFollow = (userId: number) =>
    instance.delete<IResponse>(`follow/${userId}`).then((response) => response.data)

export const getFollow = (userId: number) =>
    instance.get<boolean>(`follow/${userId}`).then((response) => response.data)
