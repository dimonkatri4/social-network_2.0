import { FieldHookConfig, useField } from 'formik'
import React from 'react'
import classNames from 'classnames'
import style from './formsControl.module.scss'

interface OtherProps {
    className: string;
}

export function MyTextInput({ className, ...props }: FieldHookConfig<string>) {
    const [field, meta] = useField(props)
    const hasError = meta.touched && meta.error
    return (
        <div className={`${style.formControl} ${hasError && style.error}`}>
            <div className={style.inputBlock}>
                {hasError && <span>{meta.error}</span>}
                <input
                    className={className}
                    {...field}
                    placeholder={props.placeholder}
                    type={props.type}
                />
            </div>
        </div>
    )
}
