import React from 'react'
import style from '../header.module.scss'

function Logo() {
    return (
        <div>
            <a href="/">
                <img
                    className={style.logo}
                    src="http://wpkixx.com/html/winku/images/logo.png"
                    alt="logo"
                />
            </a>
        </div>
    )
}

export default Logo
