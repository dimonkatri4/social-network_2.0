import React from 'react'
import preloader from '../../../assets/images/Preloader.svg'
import style from './preloader.module.scss'

function Preloader() {
    return (
        <div className={style.pagination}>
            <img src={preloader} alt="" />
        </div>
    )
}

export default Preloader
