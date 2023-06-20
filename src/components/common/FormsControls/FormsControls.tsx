import React from "react";
import s from "../FormsControls/FormsControls.module.css";
import {Field} from "redux-form";


const FormControl = ({input, meta, children, ...props}: any) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : + "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const TextArea = (props: any) => {
    const {input, meta, child, ...restProps } = props;
    return <FormControl {...props}> <textarea {...input}/> </FormControl>
}

export const Input = (props: any) => {
    const {input, meta, child, ...restProps } = props;
    return <FormControl {...props}> <input {...input}/> </FormControl>
}

export const createField = (props: any) => {
    const{placeholder, name, validators, components, ...restProps} = props;
    return <div>
        <Field placeholder={placeholder}
        name={name}
               component={components}
            {...restProps}
        />
    </div>

}



