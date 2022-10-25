import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: number;
    name: string;
    message: string
}

export function DialogItem(props: DialogItemPropsType) {
    let path = "/dialogs/1" + props.id;
    <div className={s.dialog + " " + s.active}>
        <NavLink to={path}> {props.name} </NavLink>
    </div>
}
