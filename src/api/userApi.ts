import {instance} from "./baseApi";
import {IUser} from "../types/IUser";

interface ResponseUser {
    items: IUser[]
    totalCount: number
    error: string
}

export const getUser = (pageSize: number, currentPage: number, friends?: boolean, term?: string) => {
    let urlParameter
    if(!term) {
        urlParameter = `users?count=${pageSize}&page=${currentPage}&friend=${friends}`
    } else {
        urlParameter = `users?count=${pageSize}&page=${currentPage}&friend=${friends}&term=${term}`
    }
    return instance.get<ResponseUser>(urlParameter).then((response) => response.data)
}