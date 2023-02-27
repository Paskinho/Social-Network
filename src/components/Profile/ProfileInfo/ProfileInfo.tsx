import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../ProfileContainer";
import ProfileStatus from "./ProfileStatus";
import {updateStatus} from "../../../redux/profile-reducer";


export const ProfileInfo: React.FC<ProfileType>= (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
        <div >
            <img className={s.img} src="https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2021-06/placeholder.jpg?itok=nhe1dpvk"/>
        </div>
            <div>
                <img src={props.profile.photos.large}/>
                <ProfileStatus {...props}/>
            </div>
            <div>

            </div>
        </div>
)
}

