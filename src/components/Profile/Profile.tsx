import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {Post} from "./MyPosts/Post/Post";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, profilePageType} from "../../Redux/store";


type ProfileType = {
    profilePage: profilePageType
    dispatch: (action: ActionsTypes) => void
}


export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.postData}
                profilePage={props.profilePage}
                     dispatch={props.dispatch}
            />
        </div>
    )
}