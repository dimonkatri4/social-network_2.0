import React from 'react'
import {NavLink} from "react-router-dom";
import style from "./menu.module.scss"


const Menu = () => {
    return (
        <ul className={`${style.menu} menu`}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/profile">Timeline</NavLink></li>
            <li><NavLink to="/settings">Account Settings</NavLink></li>
            <li className={style.morePageItem}><a>More Page</a>
                <ul className={style.dropMenu}>
                    <li><NavLink to="/users">Users</NavLink></li>
                    <li><NavLink to="/news">News</NavLink></li>
                    <li><NavLink to="/music">Music</NavLink></li>
                </ul>
            </li>
        </ul>
    )
}

export default Menu