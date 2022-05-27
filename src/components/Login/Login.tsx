import React from 'react';
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import s from './login.module.scss'
import winkSmile from '../../assets/images/winkSmile.png'
import logo from '../../assets/images/logo.png'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getCaptchaUrl} from "../../store/authSlice";
import classNames from 'classnames';
import {login} from "../../store/authThunks";
import {MyTextInput} from "../common/FormikFormsBuild/FormikFormsBuild";

export const LoginForm = () => {

    const dispatch = useAppDispatch()
    const {isAuth, captchaUrl} = useAppSelector(state => state.auth)

    return (
        <>
            <Formik
                initialValues={{
                    userLogin: '',
                    password: '',
                    rememberMe: false,
                    captcha: ''
                }}
                validationSchema={Yup.object({
                    userLogin: Yup.string()
                        .email('Invalid email address')
                        .required(),
                    password: Yup.string()
                        .min(6, 'Must be minimum 6 characters or more')
                        .required()
                })}
                onSubmit={({userLogin, password, rememberMe, captcha}) => {
                    return dispatch(login(userLogin, password, rememberMe, captcha))
                }}
            >
                <Form>
                    <div>
                        <MyTextInput
                            className={classNames("inputPlace", s.loginInput)}
                            name='userLogin'
                            type='email'
                            placeholder='Email'/>
                    </div>
                    <div>
                        <MyTextInput
                            className={classNames("inputPlace", s.loginInput)}
                            name='password'
                            type='password'
                            placeholder='Password'/>
                    </div>
                    <div className={s.rememberMe}>
                        <MyTextInput
                            name='rememberMe'
                            type='checkbox'
                            placeholder='Password'/> Remember me
                    </div>
                    {captchaUrl &&
                    <div className={s.captcha}>
                        <img src={captchaUrl} onClick={() => dispatch(getCaptchaUrl())}
                             title="click to update the image" alt="captcha"/>
                        <MyTextInput className='inputPlace' name='captcha' placeholder='Enter the symbols' />
                    </div>
                    }
                    <button className={classNames("button", s.loginButton)} type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    )
}

const Login = () => {
    return (
        <div className={classNames(s.loginPage, s.login_container)}>
            <div className={s.greeting}>
                <div className={s.greetingText}>Welcome to the <br/>social network
                    <div><img src={logo}/></div>
                </div>
                <div className={s.smile}>
                    <img src={winkSmile}/>
                </div>
            </div>
            <div className={classNames("profile_block", s.loginForm)}>
                <div className={`caption`}>
                    <h3 className="title">Login</h3>
                </div>
                <LoginForm/>
            </div>
        </div>
    );
};

export default Login;