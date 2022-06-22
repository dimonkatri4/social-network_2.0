import React from 'react';
import {Form, Formik} from "formik";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {MyTextInput} from "../../../common/FormikFormsBuild/FormikFormsBuild";
import style from './userSearchForm.module.scss'
import {UserFilter} from "../../../../store/userSlice";

interface Props {
    onFilterChanged: (filter: UserFilter) => void
    filter: UserFilter
}

function UserSearchForm({onFilterChanged,filter}: Props) {

    const {term, friend} = filter

    const clearForm = (reset: () => void) => {
        reset();
        if(term) {onFilterChanged({term:'', friend})}
    }

    const submit = (searchName: string): void => {
        const actualFilter: UserFilter = {
            term: searchName,
            friend
        }
        onFilterChanged(actualFilter)
    }
    return (
        <Formik initialValues={{searchName:term}} onSubmit={({searchName}) => submit(searchName)}>
            {({resetForm}) =>
                <Form className={style.searchBox}>
                    <MyTextInput name='searchName' placeholder='Search Friend'/>
                    <button type='submit' className={style.searchButton}><FontAwesomeIcon icon='search'/></button>
                    <span className={style.cleanButton} onClick={() => clearForm(resetForm)}> <FontAwesomeIcon icon='times'/></span>
                </Form>
            }
        </Formik>
    );
}

export default UserSearchForm;