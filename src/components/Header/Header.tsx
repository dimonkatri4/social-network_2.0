import React from 'react'
import style from './header.module.scss'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import {IProfile} from "../../types/IProfile";
import SearchBar from "./SearchBar/SearchBar";
import SettingArea from "./SettingArea/SettingArea";
import SignIn from "./SignIn/SignIn";

interface Props {
    isAuth: boolean
    profileOwner: IProfile
}

function Header({isAuth, profileOwner}: Props) {
    return (
        <header className={style.header}>
            <div className={style.header_container}>
                <Logo />
                {isAuth ? <Menu /> : <SearchBar />}
                {isAuth ? <SettingArea isAuth={isAuth} profileOwner={profileOwner} /> : <SignIn isAuth={isAuth}/> }
            </div>
        </header>
    )
}

export default Header
