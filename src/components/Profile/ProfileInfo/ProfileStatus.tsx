import React from "react";
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../ProfileContainer";

type ProfileStatusType = {
    status: string
    updateStatus: () => void

}

class ProfileStatus extends React.Component<ProfileStatusType>  {

    statusInputRef = React.createRef()

    state = {
        EditMode: false,
        status: this.props.status// нужно ли

    }

    activateMode = () => {
        this.setState({
            EditMode: true
        })
    }

    deActivateMode = () =>  {
        this.setState({
            EditMode: false
        });
        this.props.updateStatus();
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
                <input ref={this.statusInputRef} autoFocus={true} onBlur={this.deActivateMode} value={this.props.status}/>
            </div>
            }
        </div>
    )
}
}

export default ProfileStatus