import {getUser} from "../api/userApi";
import {AppDispatch} from "./store";
import {
    setFriendsList,
    setTotalCountUsers,
    setUsers,
    toggleFollowing,
    toggleFollowSuccess,
    toggleIsFetching
} from "./userSlice";
import {IResponse} from "../types/IResponse";
import {deleteFollow, postFollow} from "../api/followApi";

type ApiMethod = (userId: number) => Promise<IResponse>

const followUnfollowFlow = async (dispatch: AppDispatch, userId: number, apiMethod: ApiMethod) => {
    dispatch(toggleFollowing({isFetching: true, userId}))
    const data = await apiMethod(userId);
    if (data.resultCode == 0) {
        dispatch(toggleFollowSuccess(userId))
    }
    dispatch(toggleFollowing({isFetching: false, userId}))
}

export const requestUsers = (pageSize: number, page: number, friends?: boolean, term?: string) =>
    async (dispatch: AppDispatch) => {
        dispatch(toggleIsFetching(true));
        const data = await getUser(pageSize, page, friends, term);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalCountUsers(data.totalCount))
    }

export const requestFriends = (pageSize: number, page: number, friends?: boolean, term?: string) =>
    async (dispatch: AppDispatch) => {
        dispatch(toggleIsFetching(true));
        const data = await getUser(pageSize, page, friends, term);
        dispatch(toggleIsFetching(false));
        dispatch(setFriendsList(data.items));
    }

export const follow = (userId: number) => async (dispatch: AppDispatch) => {
    await followUnfollowFlow(dispatch, userId, postFollow)
}

export const unfollow = (userId: number) => async (dispatch: AppDispatch) => {
    await followUnfollowFlow(dispatch, userId, deleteFollow)
}