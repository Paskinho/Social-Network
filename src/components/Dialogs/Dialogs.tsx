import React, {useRef} from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {dialogsPageType, addMessageCreator, onMessagePostCreator, ActionsTypes} from "../../Redux/store";



export type DialogItemPropsType = {
    id: number
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
    id: number
}

const Message =(props: MessagePropsType) => {
    return <div className={s.dialog}>{props.message}</div>
}

type DialogsPropsType= {
    // DialogItem: (name: string)=> void
    state: dialogsPageType // уточнить
    // newPostText: string
    // store: ()=> void
    dispatch:(action: any)=>void
}



export const Dialogs: React.FC<DialogsPropsType> = (props) => {




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

    const dialogsItem = props.state.users.map(u => <DialogItem name={u.name} id={u.id}/>)
    const message = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/*<DialogItem name ="Trent" id = "1"/>*/}
                {/*<DialogItem name ="Virgil" id = "2"/>*/}
                {/*<DialogItem name ="Mohamed" id = "3" />*/}
                {/*<DialogItem name ="Darwin" id = "4"/>*/}
                {/*<DialogItem name ="Roberto" id = "5"/>*/}
                {/*<DialogItem name ="Thiago" id = "6"/>*/}
                {dialogsItem}
            </div>
            <div className={s.message}>
                {message}
                {/*<div>{messagesElements}</div>* /}
            {/*Dialogs*/}
                <div>
                    <div><textarea
                        value={props.state.newMessageText}
                        onChange={onMessagePost}
                        placeholder="Enter you message...">Hello</textarea></div>
                    <div> <button onClick={addMessage}>Add</button></div>
                </div>
        </div>

        </div>
    )
}