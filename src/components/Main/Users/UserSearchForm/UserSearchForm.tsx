import React from 'react';
import {Form, Formik} from "formik";
import {MyTextInput} from "../../../common/FormikFormsBuild/FormikFormsBuild";
import style from './userSearchForm.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface Props {
    searchUsers: (searchName: string) => void
    userSearchName: string
}

const UserSearchForm = ({searchUsers, userSearchName}: Props) => {
    const clearForm = (reset: () => void) => {
        reset();
        userSearchName && searchUsers('');
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
};

export default UserSearchForm;