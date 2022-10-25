import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: number;
    name: string;
    message: string
}


function DialogItem (props: DialogItemPropsType) {
  let path = "/dialogs/1" + props.id;
    <div className={s.dialog + " " + s.active}>
        <NavLink to={path}> {props.name} </NavLink>
    </div>
}

function Message (props: DialogItemPropsType) {
    return <div className={s.dialog}>{props.message}</div>
}


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name ="Trent" id = "1"/>
                <DialogItem name ="Virgil" id = "2"/>
                <DialogItem name ="Mohamed" id = "3"/>
                <DialogItem name ="Darwin" id = "4"/>
                <DialogItem name ="Roberto" id = "5"/>
                <DialogItem name ="Thiago" id = "6"/>
            </div>
            <div className={s.message}>
                <Message message="Hi"/>
                <Message message="How are you IT-Kamasutra"/>
                <Message message="YO"/>
            {/*Dialogs*/}
        </div>
        </div>
    )
}