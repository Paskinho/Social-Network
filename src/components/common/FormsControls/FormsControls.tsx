import React from "react";
import s from "../FormsControls/FormsControls.module.css";


const FormControl = (input: any, meta: any, child: any, ...props: any) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : + "")}>
            <div>
                {props.child}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const TextArea = (props: any) => {
    return <FormControl {...props}>
        <textarea {...props.input} {...props}/>
    </FormControl>
}

export const Input = (input: any, meta: any, ...props: any) => {
    return <FormControl {...props}>
        <input {...props.input} {...props}/>
    </FormControl>

}