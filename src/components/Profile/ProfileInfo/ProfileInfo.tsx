import React from 'react';
import s from './ProfileInfo.module.css'
// import {MyPosts} from "./MyPosts/MyPosts";
// import {Post} from "./MyPosts/Post/Post";


export const ProfileInfo = () => {
    return (
        <div>
        <div className={s.img}>
            <img src="https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2021-06/placeholder.jpg?itok=nhe1dpvk"/>
        </div>
    <div className={s.descriptionBlock}>
        ava+description
    </div>
        </div>
)
}

