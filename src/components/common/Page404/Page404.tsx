import React from "react";
import classNames from "classnames";
import {NavLink} from "react-router-dom";
import style from "./page404.module.scss"
import page404 from "../../../assets/images/404.svg";

function Page404() {
    return (
        <div className='content'>
            <div className='profile_block'>
                <div>
                    <img src={page404} alt='page 404'/>
                </div>
                <div className={style.errorText}>
                    <h1>Whoops! 404</h1>
                    <p>We Couldn`t Find That Page</p>
                    <button type='button' className={classNames('button', style.btnBack)}>
                        <NavLink to="/">Go Back Home</NavLink>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Page404