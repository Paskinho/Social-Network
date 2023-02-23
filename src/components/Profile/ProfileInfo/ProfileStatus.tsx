import React from "react";
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../ProfileContainer";

type ProfileStatusType = {
    status: string
}

export const ProfileStatus: React.FC<ProfileStatusType>= (props) => {

    return (
        <>
        <div>
<span>{props.status}</span>
        </div>
            <div>
                <input value={props.status}/>
            </div>
        </>
    )
}