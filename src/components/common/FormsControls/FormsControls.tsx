import React from "react";
import s from "../FormsControls/FormsControls.module.css";


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