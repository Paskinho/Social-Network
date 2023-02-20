import React, {ChangeEvent, useRef} from "react";
import s from './Dialogs.module.css';

import {DialogItem} from "./DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "@reach/router";


// type DialogsPropsType = {
//     // DialogItem: (name: string)=> void
//     dialogsState: dialogsPageType // уточнить
//     // newPostText: string
//     // store: ()=> void
//     // dispatch: (action: any) => void
//     addMessage: ()=> void
//     setMessage:(message: string) => void
//
// }


export const Dialogs: React.FC<DialogsPropsType> = ({dialogsState,addMessage,onMessage}) => {

    const dialogsItem = dialogsState.users.map((d:any) => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const message = dialogsState.messages.map((m: any) => <Message key={m.id} message={m.message} id={m.id}/>)

    // const newMessageElement = useRef<HTMLTextAreaElement>(null); //????

    const onClickAddMessage = () => {
        addMessage()
    }

    const onMessagePost = (e:ChangeEvent<HTMLTextAreaElement>) => {
        onMessage(e.currentTarget.value)
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