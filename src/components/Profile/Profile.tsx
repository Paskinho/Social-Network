import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "./ProfileContainer";





export const Profile: React.FC<ProfileType>= (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}
            isAuth={props.isAuth}/> // уточнить по isAuth
           <MyPostsContainer/>
        </div>
    )
}