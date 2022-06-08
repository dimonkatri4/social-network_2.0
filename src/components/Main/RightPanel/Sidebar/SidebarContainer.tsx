import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {requestFriends} from "../../../../store/userThunks";
import Sidebar from './Sidebar';

const SidebarContainer = () => {

    const dispatch = useAppDispatch()
    const {friendsList, isFetching } = useAppSelector(state => state.user)
    const [userSearchName, setUserSearchName] = useState('')

    useEffect(() => {
        dispatch(requestFriends(5, 1, true))
    }, [])

    const searchUsers = (searchName: string) => {
        setUserSearchName(searchName)
        dispatch(requestFriends(5, 1, true, userSearchName));
    }


    return (
        <Sidebar friends={friendsList} searchUsers={searchUsers} />
    );
};

export default SidebarContainer;