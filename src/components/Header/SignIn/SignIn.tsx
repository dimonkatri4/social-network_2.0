import React, {useEffect} from 'react';
import {Form, Formik} from "formik";
import * as Yup from 'yup'
import style from './signIn.module.scss'
import {login} from "../../../store/authThunks";
import {useAppDispatch} from "../../../hooks/redux";
import {MyTextInput} from "../../common/FormikFormsBuild/FormikFormsBuild";
import {useNavigate} from "react-router-dom";

interface Props {
    isAuth: boolean
}

const SignIn = ({isAuth}: Props) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuth) {
            navigate('/profile')
        }
    })

    return (
        <Formik
            initialValues={{
                loginHeader: '',
                passwordHeader: '',
            }}
            validationSchema={Yup.object({
                loginHeader: Yup.string().email('Invalid email address').required("Is area required!"),
                passwordHeader: Yup.string().required("Is area required!").min(6, 'Must be minimum 6 characters or more')
            })}
            onSubmit={({ loginHeader, passwordHeader }) =>
                dispatch(login(loginHeader, passwordHeader))
            }
        >
            <Form>
                <div className={style.inputPlace}>
                    <MyTextInput name='loginHeader' type='email' placeholder='Email' />
                    <MyTextInput name='passwordHeader' type='password' placeholder='Password' />
{/*                    { error && <div className={style.commonErrorLogin}>{error}</div>}*/}
                    <button className="button">Log In</button>
                </div>
            </Form>
        </Formik>
    )
}


export default SignIn;