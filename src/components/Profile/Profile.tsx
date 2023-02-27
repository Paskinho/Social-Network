import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "./ProfileContainer";
import ProfileStatus from "./ProfileInfo/ProfileStatus";


export const Profile: React.FC<ProfileType>= (props) => {
    return (
        <div>
            <ProfileInfo {...props}
            // isAuth={props.isAuth} // уточнить по isAuth
            />
            <ProfileStatus {...props}/>
           <MyPostsContainer/>
        </div>
    )
}