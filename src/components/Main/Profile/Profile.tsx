import React from 'react'
import {useSelector} from "react-redux";
import Cover from "./Cover/Cover";
import CreatePost from './CreatePost/CreatePost';
import Posts from "./Posts/Posts";
import {getProfileSelector} from "../../../store/selectors/profile-selectors";

interface Props {
    isOwner: boolean
}

const Profile = React.memo(function Profile({isOwner}: Props) {
    const profile = useSelector(getProfileSelector)
    return ( <>
            <Cover profile={profile.profile}
                   status={profile.status}
                   isOwner = {isOwner}
                   errorInStatus={profile.error}
            />
        <div className='content'>
            <CreatePost/>
            <Posts posts={profile.posts} />
        </div>
        </>
    )
})

export default Profile