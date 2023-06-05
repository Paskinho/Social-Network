import React, {useRef} from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom"
import {Message} from "./Message/Message";
import {Dialogs} from "./Dialogs";

export type DialogItemPropsType = {
    id: number
    name: string
    // DialogItem: (id: string, name: string, message: string)=> void
}


export const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.user}>
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path} style={(params)=> {
                return {color: params.isActive ? "red" : "darkred", textDecoration:'none'
                }
            }}> {props.name} </NavLink>
        </div>
        </div>
    )

}