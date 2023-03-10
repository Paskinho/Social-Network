import React, {FC} from 'react';
import s from './Post.module.css'
import {InjectedFormProps} from "redux-form";
import {AddMessageFormType} from "../../../Dialogs/Dialogs";

type MessagePostType  ={
    name: string
    like: number
    id: number
}


export const Post: FC<InjectedFormProps<MessagePostType>> = (props: any) => {
    return (
        <div className={s.item}>
            <img src="https://img.a.transfermarkt.technology/portrait/big/139208-1620651710.jpg?lm=1"/>
            <div className={s.itemText}>
                {props.name}
            </div>
        <div>
        <span>{props.like} likes</span>
    </div>
        </div>

    )
}

