import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "./ProfileContainer";
import ProfileStatus from "./ProfileInfo/ProfileStatus";


export const Profile: React.FC<ProfileType>= (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}
            // isAuth={props.isAuth} // уточнить по isAuth
            />
            <ProfileStatus status={"Hello!"}/>
           <MyPostsContainer/>
        </div>
    )
}