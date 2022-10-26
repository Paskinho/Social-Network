import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import{DialogItem} from "./DialogItem/DiaolgItem";
import {Message} from "./Message/Message";

// type DialogItemPropsType = {
//     id: number;
//     name: string;
//     message: string
// }
//
//
// export function DialogItem(props: DialogItemPropsType) {
//     let path = "/dialogs/1" + props.id;
//     <div className={s.dialog + " " + s.active}>
//         <NavLink to={path}> {props.name} </NavLink>
//     </div>
// }


// export function Message(props: DialogItemPropsType) {
//     return <div className={s.dialog}>{props.message}</div>
// }

type DialogsersPropsType = {
    users: Array<Users>
    messages: Array<Messages>
}

export const Dialogs = (props) => {



    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={dialog.id}/>);
    let messagesElements = messageData.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    {dialogsElements}
                }
            </div>
            <div className={s.message}>
                {/*<Message message={messageData[0].message}/>*/}
                {/*<Message message={messageData[1].message}/>*/}
                {/*<Message message={messageData[2].message}/>*/}
                {/*<Message message={messageData[3].message}/>*/}
                {/*<Message message={messageData[4].message}/>*/}
                {/*<Message message={messageData[5].message}/>*/}
                {/*Message*/}
            </div>
        </div>
    )
}