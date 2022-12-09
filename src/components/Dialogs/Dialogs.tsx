import React, {useRef} from "react";
import s from './Dialogs.module.css';

import {dialogsPageType, addMessageCreator, onMessagePostCreator, ActionsTypes} from "../../redux/store";
import {DialogItem} from "./DialogItem";
import {Message} from "./Message/Message";






type DialogsPropsType = {
    // DialogItem: (name: string)=> void
    dialogsState: dialogsPageType // уточнить
    // newPostText: string
    // store: ()=> void
    dispatch: (action: any) => void
}


export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const dialogsItem = props.dialogsState.users.map(u => <DialogItem key={u.id} name={u.name} id={u.id}/>)
    const message = props.dialogsState.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

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



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItem}
            </div>
            <div className={s.message}>
                {message}

                <div>
                    <div><textarea
                        value={props.dialogsState.newMessageText}
                        onChange={onMessagePost}
                        placeholder="Enter you message...">Hello</textarea></div>
                    <div>
                        <button onClick={addMessage}>Add</button>
                    </div>
                </div>
            </div>

        </div>
    )
}