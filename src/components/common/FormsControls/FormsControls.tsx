import React from "react";
import s from "../FormsControls/FormsControls.module.css";


export const TextArea = (input: any, meta: any, ...props: any) => {
    return (
    <div className={s.formControl}>
        <textarea {...input} {...props}/>
    </div>
    )
}