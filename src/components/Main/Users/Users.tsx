import React from 'react';
import classNames from "classnames";
import {UserFilter} from '../../../store/userSlice';
import Pagination from '../../common/Pagination/Pagination';
import Preloader from '../../common/Preloader/Preloader';
import style from './users.module.scss'
import User from "./User/User";
import UserSearchForm from "./UserSearchForm/UserSearchForm";
import {useAppSelector} from "../../../hooks/redux";
import {
    getArrayPages,
    getCurrentPage,
    getCurrentPortion, getFollowingInProgress, getIsFetching,
    getIsFriendsList,
    getPortionCount,
    getPortionSize,
    getUserFilter, getUsers
} from "../../../store/selectors/user-selectors";

interface Props {
    onPageChanged: (pageNumber: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    onFilterChanged: (filter: UserFilter) => void
}

function Users({onPageChanged, follow, unfollow, onFilterChanged}: Props) {

    const currentPage = useAppSelector(getCurrentPage)
    const portionSize = useAppSelector(getPortionSize)
    const filter = useAppSelector(getUserFilter)
    const isFriendsList = useAppSelector(getIsFriendsList)
    const currentPortion = useAppSelector(getCurrentPortion)
    const portionCount = useAppSelector(getPortionCount)
    const arrayPages = useAppSelector(getArrayPages)
    const isFetching = useAppSelector(getIsFetching)
    const followingInProgress = useAppSelector(getFollowingInProgress)
    const users = useAppSelector(getUsers)

    const showFriends = (isFriend: boolean | null) => {
        const actualFilter: UserFilter = {
            term: filter.term,
            friend: isFriend
        }
        onFilterChanged(actualFilter)
    }

    return (
        <div className='content'>
            <div className="profile_block">
                <div className={classNames("caption", style.friendsCaption)}>
                    <h3 onClick={() => {
                        showFriends(true);
                    }}
                        className={classNames(filter.friend && style.friendsTitleActive, style.friendsTitle)}>
                        My Friends</h3>
                    <h3 onClick={() => {
                        showFriends(null);
                    }}
                        className={classNames(filter.friend === null && style.friendsTitleActive, style.friendsTitle)}>
                        All Users</h3>
                    <h3 onClick={() => {
                        showFriends(false);
                    }}
                        className={classNames(filter.friend === false && style.friendsTitleActive, style.friendsTitle)}>
                        Unfollow Users</h3>
                </div>
                <UserSearchForm onFilterChanged={onFilterChanged} filter={filter}/>
                <Pagination
                    currentPage={currentPage}
                    portionSize={portionSize}
                    portionCount={portionCount}
                    currentPortion={currentPortion}
                    arrayPages={arrayPages}
                    onPageChanged={onPageChanged}
                    isFriendsList={isFriendsList}
                    userSearchName={filter.term}
                />
                {isFetching ? <Preloader/> :
                    <div>
                        {
                            users.map(u => <User
                                user={u}
                                followingInProgress={followingInProgress}
                                follow={follow}
                                unfollow={unfollow}
                                key={u.id}
                            />)
                        }
                    </div>}
            </div>
        </div>
    );
}

export default Users;