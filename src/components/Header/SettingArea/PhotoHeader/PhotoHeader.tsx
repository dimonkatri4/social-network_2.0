import React, {useEffect, useRef, useState} from 'react'
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import s from "./photoHeader.module.scss"
import {IProfile} from "../../../../types/IProfile";
import {logout} from "../../../../store/authThunks";
import {useAppDispatch} from "../../../../hooks/redux";
import photoUser from "../../../../assets/images/photo-user.jpg"

interface Props {
    isAuth: boolean
    profileOwner: IProfile
}

function PhotoHeader({isAuth, profileOwner}: Props) {

    const dispatch = useAppDispatch()

    const [clickedInside, setClickedInside] = useState(false)

    /**
     * Hook that edit state clicks outside of the passed ref
     */
    const useOutsideClick = (ref: React.RefObject<HTMLInputElement>) => {
        useEffect(() => {
            /**
             * Edit state if clicked on outside of element
             */
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const handleClickOutside = (e: any) => {
                if (ref.current) {
                    if (!ref.current.contains(e.target)) {
                        setClickedInside(false)
                    }
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside)
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside)
            }
        }, [ref])
    }
    const wrapperRef = useRef(null)
    useOutsideClick(wrapperRef)

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