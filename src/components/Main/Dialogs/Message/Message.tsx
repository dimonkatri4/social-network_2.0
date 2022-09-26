import React from 'react';
import {NavLink} from "react-router-dom";
import style from './message.module.scss'


interface Props {
    message: string
    photo: string
    userName: string
    userId: number
}

function Message({message, photo, userName, userId}: Props) {

    return (
        <div className={style.message}>
            <div className={style.user_photo}>
                <NavLink to={`/profile/${userId}`}>
                    <img src={photo} alt=""/>
                </NavLink>
            </div>
            <div className={style.userNameAndMessage}>
                <NavLink to={`/profile/${userId}`}>
                    <div className={style.userName}>{userName}</div>
                </NavLink>
                <div className={style.textBlock}>
                    <div className={style.triangle}> </div>
                    <div className={style.text}>{message}</div>
                </div>
            </div>
        </div>
    );
}

export default Message;