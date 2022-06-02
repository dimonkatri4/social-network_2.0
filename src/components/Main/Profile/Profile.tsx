import React from 'react'
import Cover from "./Cover/Cover";
import style from './profile.module.scss'
import {ProfileStateType} from "../../../store/profileSlice";

interface Props {
    profile: ProfileStateType
    isAuth: boolean
    isOwner: boolean
}

function Profile(props: Props) {

    return ( <>
            <Cover profile={props.profile.profile}
                   status={props.profile.status}
                   isOwner = {props.isOwner}
                   errorInStatus={props.profile.error}
            />
        <div className={style.content}>
{/*            <CreatePostContainer/>
            <MyPosts posts={props.profile.posts} /> */}
        </div>
        </>
    )
}

export default Profile