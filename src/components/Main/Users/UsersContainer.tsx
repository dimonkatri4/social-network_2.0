import React, {useEffect, useState} from 'react';
import Users from "./Users";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {follow, requestUsers, unfollow} from "../../../store/userThunks";
import { setCurrentPage, toggleIsFriendsList } from '../../../store/userSlice';

const UsersContainer = () => {

    const dispatch = useAppDispatch()
    const usersState = useAppSelector(state => state.user)
    const [userSearchName, setUserSearchName] = useState('')

    useEffect(() => {
        dispatch(requestUsers(usersState.pageSize, usersState.currentPage, usersState.isFriendsList))
    }, [])

    const followDispatch = (id: number) => {
        dispatch(follow(id))
    }
    const unfollowDispatch = (id: number) => {
        dispatch(unfollow(id))
    }

    const onPageChanged = (pageNumber: number) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(requestUsers(usersState.pageSize, pageNumber, usersState.isFriendsList, userSearchName))
    }

    const showFriends = (isFriends: boolean ) => {
        dispatch(setCurrentPage(1))
        dispatch(toggleIsFriendsList(isFriends))
        dispatch(requestUsers(usersState.pageSize, 1, isFriends))
    }

    const searchUsers = (searchName: string) => {
        dispatch(setCurrentPage(1))
        setUserSearchName(searchName)
        dispatch(requestUsers(usersState.pageSize, 1, usersState.isFriendsList, userSearchName))
    }

    const clearForm = () => {
        setUserSearchName('')
    }

    return (
        <Users
            usersState = {usersState}
            onPageChanged={onPageChanged}
            showFriends={showFriends}
            searchUsers={searchUsers}
            clearForm={clearForm}
            follow={followDispatch}
            unfollow={unfollowDispatch}
            userSearchName={userSearchName}
        />
    );
};

export default UsersContainer;