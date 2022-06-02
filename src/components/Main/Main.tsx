import React, { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import style from './main.module.scss'
import Login from '../Login/Login'
import LeftPanel from './LeftPanel/LeftPanel'
import ProfileContainer from './Profile/ProfileContainer'
import { useAppSelector } from '../../hooks/redux'

function Main() {
    const navigate = useNavigate()
    const location = useLocation()
    const isAuth = useAppSelector((state) => state.auth.isAuth)

    useEffect(() => {
        location.pathname === '/' && navigate('/profile')
    })

    return (
        <div className={style.main_page}>
            {isAuth && <LeftPanel />}
            <Routes>
                <Route path="profile/" element={<ProfileContainer />}>
                    <Route path=":userId" element={<ProfileContainer />} />
                </Route>
            </Routes>
            <div className={style.content}>
                <Routes>
                    <Route path="login" element={<Login />} />
                </Routes>
            </div>
        </div>
    )
}

export default Main
