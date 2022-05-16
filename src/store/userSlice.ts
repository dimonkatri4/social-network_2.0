import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser, ResponseUser} from "../types/IUser";


const initialState = {
    users: [] as IUser[],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as number[],
    isFriendsList: true,
    friendsList:[] as IUser[]
}

type ToggleFollowing = {
    isFetching: boolean
    userId: number
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<ResponseUser>) => {
            state.users = action.payload.items
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
        setTotalCountUsers: (state, action: PayloadAction<ResponseUser>) => {
            state.totalUsersCount = action.payload.totalCount
        },
        toggleIsFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        toggleFollowing: (state, action: PayloadAction<ToggleFollowing>) => {
            const {isFetching, userId} = action.payload;
            state.followingInProgress = isFetching ? [userId] :
                state.followingInProgress.filter(id => id !== userId)
        },
        toggleFollowSuccess: (state, action: PayloadAction<number>) => {
            state.users = state.users.map(user => {
                if(user.id === action.payload) {
                    user.followed = !user.followed
                }
                return user
            })
        },
        toggleIsFriendsList: (state, action: PayloadAction<boolean>) => {
            state.isFriendsList = action.payload
        },
        setFriendsList: (state, action: PayloadAction<ResponseUser>) => {
            state.friendsList = action.payload.items
        }
    }
})

export const {setUsers, toggleIsFetching, setCurrentPage, setFriendsList, setTotalCountUsers,
    toggleFollowing, toggleFollowSuccess, toggleIsFriendsList} = userSlice.actions

export default userSlice.reducer