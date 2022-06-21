import React from 'react';
import classNames from "classnames";
import {UserFilter} from '../../../store/userSlice';
import Pagination from '../../common/Pagination/Pagination';
import Preloader from '../../common/Preloader/Preloader';
import style from './users.module.scss'
import User from "./User/User";
import UserSearchForm from "./UserSearchForm/UserSearchForm";
import {useAppSelector} from "../../../hooks/redux";

interface Props {
    onPageChanged: (pageNumber: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    onFilterChanged: (filter: UserFilter) => void
}

function Users({onPageChanged,follow,unfollow,onFilterChanged}: Props) {

    const usersState = useAppSelector(state => state.user)
    const {filter} = usersState

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
                        className={classNames(!filter.friend && style.friendsTitleActive, style.friendsTitle)}>
                        All Users</h3>
                </div>
                <UserSearchForm onFilterChanged={onFilterChanged} filter={filter} />
                <Pagination
                    currentPage={usersState.currentPage}
                    totalItemsCount={usersState.totalUsersCount}
                    pageSize={usersState.pageSize}
                    onPageChanged={onPageChanged}
                    isFriendsList={usersState.isFriendsList}
                    userSearchName={filter.term}
                />
                {usersState.isFetching ? <Preloader/> :
                    <div>
                        {
                            usersState.users.map(u => <User
                                user={u}
                                followingInProgress={usersState.followingInProgress}
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