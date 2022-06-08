import React from 'react';
import style from './rightPanel.module.scss'
import SidebarContainer from './Sidebar/SidebarContainer'
import {Route, Routes} from "react-router-dom";
import ProfileInfoContainer from "../Profile/ProfileInfo/ProfileInfoContainer";


const RightPanel = () => {
    return (
        <div className={style.rightPanel}>
            <Routes>
                <Route path='profile/' element={<ProfileInfoContainer/>}>
                    <Route path=":userId" element={<ProfileInfoContainer/>} />
                </Route>
            </Routes>
            <SidebarContainer />
        </div>
    );
};

export default RightPanel;