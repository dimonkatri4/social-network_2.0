import React, { useEffect } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import s from './login.module.scss'
import winkSmile from '../../assets/images/winkSmile.png'
import logo from '../../assets/images/logo.png'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {getCaptchaUrl, login} from '../../store/authThunks'
import { MyTextInput } from '../common/FormikFormsBuild/FormikFormsBuild'

interface Props {
    captchaUrl: string | null;
}

export function LoginForm({ captchaUrl }: Props) {
    const dispatch = useAppDispatch()

    return (
        <Formik
            initialValues={{
                userLogin: '',
                password: '',
                rememberMe: false,
                captcha: '',
            }}
            validationSchema={Yup.object({
                userLogin: Yup.string().email('Invalid email address').required(),
                password: Yup.string().min(6, 'Must be minimum 6 characters or more').required(),
            })}
            onSubmit={({ userLogin, password, rememberMe, captcha }) =>
                dispatch(login(userLogin, password, rememberMe, captcha))
            }
        >
            <Form>
                <div>
                    <MyTextInput
                        className={classNames('inputPlace', s.loginInput)}
                        name="userLogin"
                        type="email"
                        placeholder="Email"
                    />
                </div>
                <div>
                    <MyTextInput
                        className={classNames('inputPlace', s.loginInput)}
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                </div>
                <div className={s.rememberMe}>
                    <MyTextInput name="rememberMe" type="checkbox" placeholder="Password" />{' '}
                    Remember me
                </div>
                {captchaUrl && (
                    <div className={s.captcha}>
                        <img
                            src={captchaUrl}
                            onClick={() => dispatch(getCaptchaUrl())}
                            title="click to update the image"
                            alt="captcha"
                        />
                        <MyTextInput
                            className="inputPlace"
                            name="captcha"
                            placeholder="Enter the symbols"
                        />
                    </div>
                )}
                <button className={classNames('button', s.loginButton)} type="submit">
                    Submit
                </button>
            </Form>
        </Formik>
    )
}

function Login() {
    const { isAuth, captchaUrl } = useAppSelector((state) => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuth) {
            navigate('/profile')
        }
    })

    return (
        <div className={classNames(s.loginPage, s.login_container)}>
            <div className={s.greeting}>
                <div className={s.greetingText}>
                    Welcome to the <br />
                    social network
                    <div>
                        <img src={logo} alt='logo' />
                    </div>
                </div>
                <div className={s.smile}>
                    <img src={winkSmile} alt='logo-smile'/>
                </div>
            </div>
            <div className={classNames('profile_block', s.loginForm)}>
                <div className="caption">
                    <h3 className="title">Login</h3>
                </div>
                <LoginForm captchaUrl={captchaUrl} />
            </div>
        </div>
    )
}

export default Login
