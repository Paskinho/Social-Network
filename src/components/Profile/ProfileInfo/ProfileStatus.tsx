import React from "react";
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../ProfileContainer";

type ProfileStatusType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusType>  {
render() {
    return (
        <div>
        <div>
<span>{this.props.status}</span>
        </div>
            <div>
                <input value={this.props.status}/>
            </div>
        </div>
    )
}
}