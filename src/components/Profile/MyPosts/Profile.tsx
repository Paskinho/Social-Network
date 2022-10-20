import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {Post} from "./Post/Post";


const Profile = () => {
    return (
        <div className={s.content}>
    <div>
        <img src="https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2021-06/placeholder.jpg?itok=nhe1dpvk"/>
    </div>
    <div>
        ava+description
    </div>
    <MyPosts />
</div>
)
}

export default Profile