import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {Post} from "./MyPosts/Post/Post";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {myPostsPageType} from "../../Redux/state";


type ProfileType = {
    myPostPage: myPostsPageType
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}


export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts myPostPage={props.myPostPage}
                     addPost={props.addPost}
                     // addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

