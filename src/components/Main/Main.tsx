import React, {useEffect} from 'react';
import style from './main.module.scss'
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Login from "../Login/Login";
import LeftPanel from "./LeftPanel/LeftPanel";
import ProfileContainer from "./Profile/ProfileContainer";

const Main = () => {

    let navigate = useNavigate()
    let location = useLocation()

    useEffect(() => {
        location.pathname === '/' && navigate('/profile')
    })

    return (
        <div className={style.main_page}>
            <LeftPanel/>
            <Routes>
                <Route path='profile/' element={<ProfileContainer/>}>
                    <Route path=':userId' element={<ProfileContainer/>}/>
                </Route>
            </Routes>
            <div className={style.content}>
                <Routes>
                    <Route path='login' element={<Login/>}/>
                </Routes>
            </div>

        </div>
    );
};

export default Main;