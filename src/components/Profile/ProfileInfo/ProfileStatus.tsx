import React from "react";
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../ProfileContainer";

type ProfileStatusType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusType>  {

    state = {
        EditMode: false
    }

    activateMode () {
        this.setState({
            EditMode: true
        })
    }


render() {
    return (
        <div>
            {!this.state.EditMode &&
        <div>

<span onDoubleClick={this.activateMode.bind(this)}> {this.props.status}</span>
        </div>
            }
            {this.state.EditMode &&
            <div>
                <input value={this.props.status}/>
            </div>
            }
        </div>

    )
}
}

export default ProfileStatus