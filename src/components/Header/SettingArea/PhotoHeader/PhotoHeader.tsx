import React, {useRef, useState} from 'react'
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import s from "./photoHeader.module.scss"
import {IProfile} from "../../../../types/IProfile";
import {logout} from "../../../../store/authThunks";
import {useAppDispatch} from "../../../../hooks/redux";
import photoUser from "../../../../assets/images/photo-user.jpg"
import {useOnClickOutside} from "usehooks-ts";

interface Props {
    isAuth: boolean
    profileOwner: IProfile
}

function PhotoHeader({isAuth, profileOwner}: Props) {

    const dispatch = useAppDispatch()
    const [clickedInside, setClickedInside] = useState(false)

    const handleClickOutside = () => {
        if (clickedInside) {
            setClickedInside(false)
            console.log('clicked outside')
        }
    }
    const wrapperRef = useRef(null)
    useOnClickOutside(wrapperRef, handleClickOutside)

    return (
        <div ref={wrapperRef} className={s.photo_header}>
            <img
                src={profileOwner.photos.small ? profileOwner.photos.small : photoUser}
                alt="user"
                onClick={() => setClickedInside(!clickedInside)}
            />
            <div>{isAuth && profileOwner.fullName}</div>
            {clickedInside &&
            <div className={classNames(s.userSettings)} onClick={() => setClickedInside(false)}>
                <ul>
                    <li className={s.itemMenu} >
                        <NavLink to='/profile'>
                            <FontAwesomeIcon icon={["fas","user-circle"]} className={s.icon}/>
                            View Profile
                        </NavLink>
                    </li>
                    <li className={s.itemMenu} >
                        <NavLink to='/profile'>
                            <FontAwesomeIcon icon="user-edit" className={s.icon}/>
                            Edit Profile
                        </NavLink>
                    </li>
                    <li className={s.itemMenu}>
                        <NavLink to='/settings'>
                            <FontAwesomeIcon icon="cog" className={s.icon}/>
                            Account Setting
                        </NavLink>
                    </li>
                    <li className={s.itemMenu} onClick={() => dispatch(logout())}>
                        <NavLink to='/login' >
                            <FontAwesomeIcon icon="sign-out-alt" className={s.icon}/>
                            Log Out
                        </NavLink>
                    </li>
                </ul>
            </div>}
        </div>
    )
}

export default PhotoHeader