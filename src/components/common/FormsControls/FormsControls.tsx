import React from "react";
import s from "../FormsControls/FormsControls.module.css";

export const TextArea = (input: any, meta: any, ...props: any) => {
    const hasError = meta.error && meta.touched;
    return (
    <div className={s.formControl + " " + (hasError ? s.error : + "")}>
        <div>
        <textarea {...input} {...props}/>
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
    )
}

export const Input = (input: any, meta: any, ...props: any) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : + "")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}