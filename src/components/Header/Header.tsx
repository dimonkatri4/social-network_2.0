import React from 'react';
import style from './header.module.scss'
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header_container}>
                <Logo />
                <Menu />
            </div>
        </header>
    );
};

export default Header;