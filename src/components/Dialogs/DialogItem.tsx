import React, {useRef} from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom"

export type DialogItemPropsType = {
    id: number
    name: string
    // DialogItem: (id: string, name: string, message: string)=> void
}


export const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/1" + props.id;
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )

}