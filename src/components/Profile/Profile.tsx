import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, profilePageType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../redux/redux-store";




export const Profile: React.FC= () => {
    return (
        <div>
            <ProfileInfo/>
           <MyPostsContainer
            />
        </div>
    )
}