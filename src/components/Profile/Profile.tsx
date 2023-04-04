import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "./ProfileContainer";
import {ProfileStatusWithHooks} from "./ProfileInfo/ProfileStatusWithHooks";


export const Profile: React.FC<ProfileType>= (props) => {
    return (
        <div>
            <ProfileInfo {...props}
            // isAuth={props.isAuth} // уточнить по isAuth
            />
           <MyPostsContainer/>
        </div>
    )
}