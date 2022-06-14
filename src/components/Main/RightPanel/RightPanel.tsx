import React from 'react'
import { Route, Routes } from 'react-router-dom'
import style from './rightPanel.module.scss'
import SidebarContainer from './Sidebar/SidebarContainer'
import ProfileInfoContainer from '../Profile/ProfileInfo/ProfileInfoContainer'

function RightPanel() {
    return (
        <div className={style.rightPanel}>
            <Routes>
                <Route path="profile/" element={<ProfileInfoContainer />}>
                    <Route path=":userId" element={<ProfileInfoContainer />} />
                </Route>
            </Routes>
            <SidebarContainer />
        </div>
    )
}

export default RightPanel
