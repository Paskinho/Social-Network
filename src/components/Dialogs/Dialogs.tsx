import React from "react";
import s from './Dialogs.module.css';
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

export function Message(props: DialogItemPropsType) {
    return <div className={s.dialog}>{props.message}</div>
}


export const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: "Trent"},
        {id: 2, name: "Virgil"},
        {id: 3, name: "Mohamed"},
        {id: 4, name: "Darwin"},
        {id: 5, name: "Roberto"},
        {id: 6, name: "Thiago"},
    ]

    let messageData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you IT-Kamasutra"},
        {id: 3, message: "YO"},
        {id: 4, message: "YO"},
        {id: 5, message: "YO"},
        {id: 6, message: "YO"},
    ]



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={s.message}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
                <Message message={messageData[4].message}/>
                <Message message={messageData[5].message}/>
                {/*Dialogs*/}
            </div>
        </div>
    )
}