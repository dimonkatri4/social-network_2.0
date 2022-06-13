import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser, ResponseUser} from "../types/IUser";


const initialState = {
    users: [] as IUser[],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as number[],
    isFriendsList: true as boolean | undefined,
    friendsList:[] as IUser[]
}

export type UserStateType = typeof initialState
type ToggleFollowing = {
    isFetching: boolean
    userId: number
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
        setTotalCountUsers: (state, action: PayloadAction<number>) => {
            state.totalUsersCount = action.payload
        },
        toggleIsFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        toggleFollowing: (state, action: PayloadAction<ToggleFollowing>) => {
            state.followingInProgress = action.payload.isFetching ? [action.payload.userId] :
                state.followingInProgress.filter(id => id !== action.payload.userId)
        },
        toggleFollowSuccess: (state, action: PayloadAction<number>) => {
            state.users = state.users.map(user => {
                if(user.id === action.payload) {
                    user.followed = !user.followed
                }
                return user
            })
        },
        toggleIsFriendsList: (state, action: PayloadAction<boolean | undefined>) => {
            state.isFriendsList = action.payload
        },
        setFriendsList: (state, action: PayloadAction<IUser[]>) => {
            state.friendsList = action.payload
        }
    }
})

export const {setUsers, toggleIsFetching, setCurrentPage, setFriendsList, setTotalCountUsers,
    toggleFollowing, toggleFollowSuccess, toggleIsFriendsList} = userSlice.actions

export default userSlice.reducer