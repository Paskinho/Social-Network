import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {Post} from "./MyPosts/Post/Post";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, myPostsPageType} from "../../Redux/state";


type ProfileType = {
    myPostPage: myPostsPageType
    dispatch: (action: ActionsTypes) => void
}


export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts myPostPage={props.myPostPage}
                     dispatch={props.dispatch}
            />
        </div>
    )
}