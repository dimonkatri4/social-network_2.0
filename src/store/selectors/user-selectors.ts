import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const getCurrentPage = (state: RootState) => state.user.currentPage
export const getPortionSize = (state: RootState) => state.user.portionSize
export const getTotalUsersCount = (state: RootState) => state.user.totalUsersCount
export const getPageSize = (state: RootState) => state.user.pageSize
export const getIsFriendsList= (state: RootState) => state.user.isFriendsList
export const getUserFilter= (state: RootState) => state.user.filter
export const getIsFetching= (state: RootState) => state.user.isFetching
export const getFollowingInProgress= (state: RootState) => state.user.followingInProgress
export const getUsers= (state: RootState) => state.user.users

export const getPageCount = createSelector(
    getTotalUsersCount,
    getPageSize,
    (totalUserCount, pageSize) => {
        return Math.ceil(totalUserCount / pageSize)
    }
)

export const getCurrentPortion = createSelector(
    getCurrentPage,
    getPortionSize,
    (currentPage, portionSize) => {
        return Math.ceil(currentPage / portionSize)
} )

export const getPortionCount = createSelector(
    getPageCount,
    getPortionSize,
    (pageCount, portionSize) => {
        return Math.ceil(pageCount / portionSize)
    }
)

export const getArrayPages = createSelector(
    getPageCount, (pageCount) => {
        const arrayPages = [];
        for (let i = 1; i <= pageCount; i++) {
            arrayPages.push(i)
        }
        return arrayPages
    }
)