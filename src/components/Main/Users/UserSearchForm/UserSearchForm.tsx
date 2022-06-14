import React from 'react';
import {Form, Formik} from "formik";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {MyTextInput} from "../../../common/FormikFormsBuild/FormikFormsBuild";
import style from './userSearchForm.module.scss'

interface Props {
    searchUsers: (searchName: string) => void
    userSearchName: string
}

function UserSearchForm({searchUsers, userSearchName}: Props) {
    const clearForm = (reset: () => void) => {
        reset();
        if(userSearchName) {searchUsers('')}
    }
    return (
        <Formik initialValues={{userSearchName}} onSubmit={({userSearchName}) => searchUsers(userSearchName)}>
            {({resetForm}) =>
                <Form className={style.searchBox}>
                    <MyTextInput name='userSearchName' placeholder='Search Friend'/>
                    <button type='submit' className={style.searchButton}><FontAwesomeIcon icon='search'/></button>
                    <span className={style.cleanButton} onClick={() => clearForm(resetForm)}> <FontAwesomeIcon icon='times'/></span>
                </Form>
            }
        </Formik>
    );
}

export default UserSearchForm;