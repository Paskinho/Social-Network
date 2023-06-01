import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../ProfileContainer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import { Tilt } from 'react-tilt';



export const ProfileInfo: React.FC<ProfileType>= (props) => {
    if (props.profile) {
        return <Preloader/>
    }

    return (
        <div>
        <div >
            <Tilt options={{
                max: 150,
            }}>
            <img className={s.img} src="https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2021-06/placeholder.jpg?itok=nhe1dpvk"/>
            </Tilt>
            </div>
            <div>
                {/*<img src={props.profile.photos.large}/>*/}
                <ProfileStatusWithHooks status={props.status} updateStatus={()=>{}}/>
            </div>
            <div>

            </div>
        </div>
)
}