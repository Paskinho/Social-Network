import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../ProfileContainer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import { Tilt } from 'react-tilt';
import userPhoto from "../../../assets/images/user.png";
import {savePhoto} from "../../../redux/profile-reducer";



export const ProfileInfo: React.FC<ProfileType>= (props) => {
    if (props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: any) => { // УТОЧНИТЬ ТИП
        if (e.target.files.length) {
            savePhoto(e.target.fules[0])
        }
    }


    return (
        <div>
        <div >

            <img className={s.img} src="https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2021-06/placeholder.jpg?itok=nhe1dpvk"/>

            </div>
            <div>
                {/*<img src={props.profile.photos.large || userPhoto} className={s.img}/>*/}
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <div>
                    <div>
                        <b>Full Name</b>: {props.profile.fullName}
                    </div>
                    <div>
                        <b>Looking for a job</b>: {props.profile.lookingForAJob ? 'yes' : 'no'}
                    </div>
                    {props.profile.lookingForAJob &&
                        <div>
                            <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
                        </div>
                    }
                    <div>
                        <b>About me</b>: {props.profile.aboutMe}
                    </div>
                </div>

                <ProfileStatusWithHooks status={props.status} updateStatus={()=>{}}/>
            </div>
            <div>

            </div>
        </div>
)
}