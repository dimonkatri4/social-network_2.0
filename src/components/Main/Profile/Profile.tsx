import React from 'react'
import Cover from "./Cover/Cover";
import {ProfileStateType} from "../../../store/profileSlice";
import CreatePost from './CreatePost/CreatePost';
import Posts from "./Posts/Posts";

interface Props {
    profile: ProfileStateType
    isOwner: boolean
}

function Profile(props: Props) {

    return ( <>
            <Cover profile={props.profile.profile}
                   status={props.profile.status}
                   isOwner = {props.isOwner}
                   errorInStatus={props.profile.error}
            />
        <div className='content'>
            <CreatePost/>
            <Posts posts={props.profile.posts} />
        </div>
        </>
    )
}

export default Profile