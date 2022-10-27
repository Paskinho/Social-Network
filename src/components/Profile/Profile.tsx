import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {Post} from "./MyPosts/Post/Post";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type PostDataType = {
    postData : Array<Postdata>
}



export const Profile = (props: PostDataType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.postData}/>
        </div>
    )
}

