import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {dialogsPageType, addMessageCreator, onMessagePostCreator, ActionsTypes} from "../../Redux/state";



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
    store: ()=> void
}



export const Dialogs: React.FC<DialogsPropsType> = (props) => {


    let state = props.store.getState().dialogsPage

    // const dialogsElements = props.state.messages.map(m => <DialogItem id={m.id} name={m.name})
    // const messagesElements = props.state.users.map(m => <DialogItem id={m.id} name={m.name})
    // const newMessageBody = props.newPostText

    const onSendMessagesClick = ()=> {
        props.store.dispatch(sendMessageCreator)
    }

 const onNewMessageChange = (e)=> {
        const body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name ="Trent" id = "1"/>
                <DialogItem name ="Virgil" id = "2"/>
                <DialogItem name ="Mohamed" id = "3" />
                <DialogItem name ="Darwin" id = "4"/>
                <DialogItem name ="Roberto" id = "5"/>
                <DialogItem name ="Thiago" id = "6"/>
                {/*//{dialogsElements}*/}
            </div>
            <div className={s.message}>
                <Message message="Hi"/>
                <Message message="How are you IT-Kamasutra"/>
                <Message message="YO"/>
                {/*<div>{messagesElements}</div>* /}
            {/*Dialogs*/}
                <div>
                    <div><textarea
                        value={props.state.newMessageText}
                        onChange={onNewMessageChange}
                        placeholder="Enter you message">Hello</textarea></div>
                    <div> <button onClick={onSendMessagesClick}>Add</button></div>
                </div>
        </div>

        </div>
    )
}