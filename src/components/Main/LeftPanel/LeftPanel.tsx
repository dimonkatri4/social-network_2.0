import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './navbar.module.scss'

function LeftPanel() {
    return (
        <div className={s.leftPanel}>
            <NavBar />
        </div>
    )
}

function NavBar() {
    return (
        <nav className={`${s.nav} profile_block`}>
            <div className={`${s.caption} caption`}>
                <h3 className="title">Shortcuts</h3>
            </div>
            <div className={s.item}>
                <NavLink to="/profile" className={(item) => (item.isActive ? s.active : '')}>
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={(item) => (item.isActive ? s.active : '')}>
                    Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={(item) => (item.isActive ? s.active : '')}>
                    Users
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={(item) => (item.isActive ? s.active : '')}>
                    News
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={(item) => (item.isActive ? s.active : '')}>
                    Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={(item) => (item.isActive ? s.active : '')}>
                    Settings
                </NavLink>
            </div>
        </nav>
    )
}
export default LeftPanel
