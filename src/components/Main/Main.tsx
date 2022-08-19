import React, {useEffect} from 'react'
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import style from './main.module.scss'
import Login from '../Login/Login'
import LeftPanel from './LeftPanel/LeftPanel'
import ProfileContainer from './Profile/ProfileContainer'
import {useAppSelector} from '../../hooks/redux'
import RightPanel from './RightPanel/RightPanel'
import UsersContainer from './Users/UsersContainer'
import Page404 from "../common/Page404/Page404";
import ModalWindow from "../common/ModalWindow/ModalWindow";
import userPhoto from "../../assets/images/photo-user.jpg"

function Main() {
    const navigate = useNavigate()
    const location = useLocation()
    const isAuth = useAppSelector((state) => state.auth.isAuth)
    const profile = useAppSelector((state) => state.profile.profile)

    const profilePhoto = profile && profile.photos;

    useEffect(() => {
        location.pathname === '/' && navigate('/profile')
    })

    return (
        <div className={style.main_page}>
            {isAuth && <LeftPanel/>}
            <Routes>
                <Route path="profile/" element={<ProfileContainer />}>
                    <Route path=":userId" element={<ProfileContainer />}/>
                </Route>
                <Route path="/users" element={<UsersContainer/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path='*' element={<Page404/>}/>
            </Routes>
            <ModalWindow>
                {profilePhoto &&
                <img alt='user' src={profilePhoto.large ? profilePhoto.large : userPhoto}/>}
            </ModalWindow>
            {isAuth && <RightPanel/>}
        </div>
    )
}

export default Main
