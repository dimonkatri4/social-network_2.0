import React from 'react'
import s from "./coverMenu.module.scss"

const CoverMenu = () => {
    return (
        <ul className={`${s.cover_menu} cover_menu`}>
            <li><a href="/">Time Line</a></li>
            <li><a href="/">Photos</a></li>
            <li><a href="/">Videos</a></li>
            <li><a href="/">Friends</a></li>
            <li><a href="/">Groups</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">More</a></li>
        </ul>
    )
}

export default CoverMenu