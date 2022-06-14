import React from 'react';
import {NavLink} from "react-router-dom";
import style from './sidebar.module.scss'

interface Props {
    id: number
    avatar: string
    name: string
}

function SidebarItem({id, avatar, name}: Props) {
    return (
        <div>
            <NavLink className={style.friend} to={`/profile/${id}`}>
                <img className={style.ava} src={avatar} alt="" />
                <div> {name} </div>
            </NavLink>
        </div>
    );
}

export default SidebarItem;