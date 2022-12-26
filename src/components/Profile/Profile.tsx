import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";





export const Profile: React.FC= () => {
    return (
        <div>
            <ProfileInfo/>
           <MyPostsContainer/>
        </div>
    )
}