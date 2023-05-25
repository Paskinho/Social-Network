import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {AddMessageReduxForm} from "./AddMessageForm/AddMessageForm";


export const Dialogs: React.FC<DialogsPropsType> = ({dialogsState,addMessage}) => {

    const dialogsItem = dialogsState.users.map((d:any) => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const message = dialogsState.messages.map((m: any) => <Message key={m.id} message={m.message} id={m.id}/>)

    // const newMessageElement = useRef<HTMLTextAreaElement>(null); //????

const addNemMessage = (values: any) => {
    addMessage(values.newMessageText)
}

// if (!authReducer.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItem}
            </div>
            <div className={s.message}>
                {message}
            </div>
<AddMessageReduxForm onSubmit={addNemMessage}/>
        </div>
    )
}