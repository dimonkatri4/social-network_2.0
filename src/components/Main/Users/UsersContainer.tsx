import React, { useEffect} from 'react'
import Users from './Users'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { follow, requestUsers, unfollow } from '../../../store/userThunks'
import {UserFilter} from '../../../store/userSlice'

function UsersContainer() {
    const dispatch = useAppDispatch()
    const {pageSize,currentPage,filter} = useAppSelector((state) => state.user)

    useEffect(() => {
        dispatch(requestUsers(pageSize, currentPage, filter))
    }, [])

    const followDispatch = (id: number) => {
        dispatch(follow(id))
    }
    const unfollowDispatch = (id: number) => {
        dispatch(unfollow(id))
    }

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageSize, pageNumber, filter))
    }
    const onFilterChanged = (filters: UserFilter) => {
        dispatch(requestUsers(pageSize, 1, filters))
    }

    return (
        <Users
            onPageChanged={onPageChanged}
            follow={followDispatch}
            unfollow={unfollowDispatch}
            onFilterChanged={onFilterChanged}
        />
    )
}

export default UsersContainer
