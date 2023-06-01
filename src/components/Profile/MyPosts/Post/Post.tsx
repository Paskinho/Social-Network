import React from 'react';
import { Tilt } from 'react-tilt';
import s from './Post.module.css'

type MessagePostType ={
    name: string
    like: number
    id: number
}


export const Post = (props: MessagePostType) => {
    return (
        <div className={s.item}>
            <Tilt options={{
                max: 35,
            }}>
            <img src="https://img.a.transfermarkt.technology/portrait/big/139208-1620651710.jpg?lm=1"/>
            </Tilt>
            <div className={s.itemText}>
                {props.name}
            </div>
        <div>
        <span>{props.like} likes</span>
    </div>
        </div>

    )
}

