import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {dialogsPageType, RootStateType} from "../../Redux/state";



export type DialogItemPropsType = {
    id: string
    name: string
    // DialogItem: (id: string, name: string, message: string)=> void
}


const DialogItem = (props:DialogItemPropsType) => {
  let path = "/dialogs/1" + props.id;
  return(
    <div className={s.dialog + " " + s.active}>
        <NavLink to={path}> {props.name} </NavLink>
    </div>
  )

}

type MessagePropsType = {
    message: string
}

const Message =(props: MessagePropsType) => {
    return <div className={s.dialog}>{props.message}</div>
}

type DialogsPropsType= {
    // DialogItem: (name: string)=> void
    state: dialogsPageType // уточнить
    newPostText: string
}


export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name ="Trent" id = "1"/>
                <DialogItem name ="Virgil" id = "2"/>
                <DialogItem name ="Mohamed" id = "3" />
                <DialogItem name ="Darwin" id = "4"/>
                <DialogItem name ="Roberto" id = "5"/>
                <DialogItem name ="Thiago" id = "6"/>
            </div>
            <div className={s.message}>
                <Message message="Hi"/>
                <Message message="How are you IT-Kamasutra"/>
                <Message message="YO"/>
            {/*Dialogs*/}
                <textarea>Hello</textarea>
                <button>Add</button>
        </div>

        </div>
    )
}