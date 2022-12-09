import React, {useRef} from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {dialogsPageType, addMessageCreator, onMessagePostCreator, ActionsTypes} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import {DialogItem} from "./DialogItem";




type MessagePropsType = {
    message: string
    id: number
}

const Message = (props: MessagePropsType) => {
    return <div className={s.dialog}>{props.message}</div>
}

type DialogsPropsType = {
    // DialogItem: (name: string)=> void
    dialogsState: dialogsPageType // уточнить
    // newPostText: string
    // store: ()=> void
    dispatch: (action: any) => void
}


export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    const newMessageElement = useRef<HTMLTextAreaElement>(null);

    const addMessage = () => {
        let newMessage = newMessageElement.current?.value
        if (newMessage) props.dispatch(addMessageCreator(newMessage))
        if (newMessageElement.current) newMessageElement.current.value = ''
    }

    // const dialogsElements = props.state.messages.map(m => <DialogItem id={m.id} name={m.name})
    // const messagesElements = props.state.users.map(m => <DialogItem id={m.id} name={m.name})
    // const newMessageBody = props.newPostText

    let onMessagePost = () => {
        let text = newMessageElement.current?.value
        text ? props.dispatch(onMessagePostCreator(text)) :
            props.dispatch(onMessagePostCreator(""));
    }

    const dialogsItem = props.dialogsState.users.map(u => <DialogItem name={u.name} id={u.id}/>)
    const message = props.dialogsState.messages.map(m => <Message message={m.message} id={m.id}/>)

    return <Dialogs dialogsState={} dispatch={}/>

}