import React, {ChangeEvent, useRef} from "react";
import s from './Dialogs.module.css';

import {dialogsPageType, addMessageCreator, onMessagePostCreator, ActionsTypes} from "../../redux/store";
import {DialogItem} from "./DialogItem";
import {Message} from "./Message/Message";






type DialogsPropsType = {
    // DialogItem: (name: string)=> void
    dialogsState: dialogsPageType // уточнить
    // newPostText: string
    // store: ()=> void
    // dispatch: (action: any) => void
    addMessage: ()=> void
    setMessage:(message: string) => void

}


export const Dialogs: React.FC<DialogsPropsType> = ({dialogsState,addMessage,setMessage}) => {

    const dialogsItem = dialogsState.users.map(u => <DialogItem key={u.id} name={u.name} id={u.id}/>)
    const message = dialogsState.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    const newMessageElement = useRef<HTMLTextAreaElement>(null);

    const onClickAddMessage = () => {
        addMessage()
    }

    const onMessagePost = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
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
                        value={dialogsState.newMessageText}
                        onChange={onMessagePost}
                        placeholder="Enter you message...">Hello</textarea></div>
                    <div>
                        <button onClick={onClickAddMessage}>Add</button>
                    </div>
                </div>
            </div>

        </div>
    )
}