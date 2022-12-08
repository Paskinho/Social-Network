import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, profilePageType} from "../../redux/store";


type ProfileType = {
    profilePage: profilePageType
    dispatch: (action: ActionsTypes) => void
}


export const Profile: React.FC<ProfileType> = ({profilePage, dispatch}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={profilePage.postData}
                     dispatch={dispatch}
                     postText={profilePage.newPostText}
            />
        </div>
    )
}