import React from 'react';
import { UserStateType } from '../../../store/userSlice';
import classNames from "classnames";
import Pagination from '../../common/Pagination/Pagination';
import Preloader from '../../common/Preloader/Preloader';
import style from './users.module.scss'
import User from "./User/User";

interface Props {
    usersState: UserStateType
    userSearchName: string
    onPageChanged: (pageNumber: number) => void
    showFriends: (isFriends: boolean) => void
    searchUsers: (searchName: string) => void
    clearForm: () => void
    follow: (id: number) => void
    unfollow: (id: number) => void
}

const Users = (props: Props) => {
    return (
        <div className="profile_block">
            <div className={classNames("caption",style.friendsCaption)}>
                <h3 onClick={() => {
                    props.showFriends(true);
                    props.clearForm();
                }}
                    className={classNames(props.usersState.isFriendsList &&  style.friendsTitleActive,style.friendsTitle)}>
                    My Friends</h3>
                <h3 onClick={() => {
                    props.showFriends(false);
                    props.clearForm();
                }}
                    className={classNames(!props.usersState.isFriendsList &&  style.friendsTitleActive,style.friendsTitle)}>
                    All Users</h3>
            </div>
            {/*<SearchUsersReduxForm onSubmit={onSubmit} searchUsers={searchUsers} userSearchName={userSearchName} />*/}
            <Pagination
                currentPage={props.usersState.currentPage}
                totalItemsCount={props.usersState.totalUsersCount}
                pageSize={props.usersState.pageSize}
                onPageChanged={props.onPageChanged}
                isFriendsList={props.usersState.isFriendsList}
                userSearchName={props.userSearchName}
            />
            {props.usersState.isFetching ? <Preloader/> :
                <div>
                    {
                        props.usersState.users.map(u => <User
                            user={u}
                            followingInProgress={props.usersState.followingInProgress}
                            follow={props.follow}
                            unfollow={props.unfollow}
                            key={u.id}
                        />)
                    }
                </div> }
        </div>
    );
};

export default Users;