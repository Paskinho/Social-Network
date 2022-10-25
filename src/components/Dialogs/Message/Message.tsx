import React from "react";
import s from './../Dialogs.module.css';

type DialogItemPropsType = {
    id: number;
    name: string;
    message: string
}


export function Message(props: DialogItemPropsType) {
    return <div className={s.dialog}>{props.message}</div>
}


