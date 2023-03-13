import React from "react";
import s from "../FormsControls/FormsControls.module.css";


export const TextArea = (input: any, meta: any, ...props: any) => {
    return (
    <div className={s.formControl + " " + s.error}>
        <div>
        <textarea {...input} {...props}/>
        </div>
        <span>{"Some error"}</span>
    </div>
    )
}