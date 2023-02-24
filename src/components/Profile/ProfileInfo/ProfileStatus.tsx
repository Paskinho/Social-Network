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

    activateMode = () => {
        debugger
        this.setState({
            EditMode: true
        })
    }

    deActivateMode () {
        this.setState({
            EditMode: false
        })
    }

render() {
    return (
        <div>
            {!this.state.EditMode &&
        <div>

<span onDoubleClick={this.activateMode}> {this.props.status}</span>
        </div>
            }
            {this.state.EditMode &&
            <div>
                <input autoFocus={true} onBlur={this.deActivateMode.bind(this)} value={this.props.status}/>
            </div>
            }
        </div>
    )
}
}

export default ProfileStatus