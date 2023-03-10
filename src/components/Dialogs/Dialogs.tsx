import React, {ChangeEvent, FC, useRef} from "react";
import s from './Dialogs.module.css';

import {DialogItem} from "./DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "@reach/router";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {LoginFormType} from "../Login/Login";
import {authReducer} from "../../redux/auth-reducer";


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

export type AddMessageFormType = {
    newMessageText: string
    addMessage: () => void
    onMessage: () => void
}


export const AddMessageForm: FC<InjectedFormProps<AddMessageFormType>> = (props: any) => {



return (
    <form onSubmit={props.handleSubmit}>
    <div>
        <Field component='textarea' name = 'newMessageText' placeholder="Enter you message..."/>
    </div>
    <div>
        <button>Add</button>
    </div>
</form>
)
}

const AddMessageReduxForm = reduxForm<AddMessageFormType> ({
    form: 'dialogAddMessage'
})(AddMessageForm)

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