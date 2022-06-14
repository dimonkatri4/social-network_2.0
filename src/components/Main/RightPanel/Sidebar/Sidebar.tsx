import React from 'react';
import {Form, Formik} from "formik";
import {IUser} from '../../../../types/IUser';
import style from './sidebar.module.scss'
import SidebarItem from "./SidebarItem";
import {MyTextInput} from "../../../common/FormikFormsBuild/FormikFormsBuild";

interface Props {
    friends: IUser[]
    searchUsers: (searchName: string) => void
}

function Sidebar({friends, searchUsers}: Props) {

    const friendElement = friends.map(user => <SidebarItem
        key={user.id}
        id={user.id}
        avatar={user.photos.small}
        name={user.name}
    />)

    return (
        <div className={` ${style.sidebar} profile_block`}>
            <div className='friends_block'>
                <div className="caption">
                    <h3 className="title">Friends</h3>
                </div>
                <div className={style.search}>
                    <SearchUserInSidebar searchUsers={searchUsers}/>
                </div>
                {friendElement}
            </div>
        </div>
    );
}


function SearchUserInSidebar({searchUsers}: Omit<Props, 'friends'>) {
    return (
        <Formik
    initialValues={{
        searchUsersName: ''
    }}
    onSubmit={({searchUsersName}) => {
        searchUsers(searchUsersName)
    }}
        >
                <Form>
                    <MyTextInput name='searchUsersName' placeholder='Search Friends...' />
                </Form>
        </Formik>
    )
}


export default Sidebar;