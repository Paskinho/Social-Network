import React from "react";
import {ProfileType} from "../ProfileContainer";

type ProfileStatusType = {
    status: string
    updateStatus: () => void

}

class ProfileStatus extends React.Component<ProfileType> {

    state = {
        EditMode: false,
        status: this.props.status
    }

    activateMode = () => {
        this.setState({
            EditMode: true
        })
    }

    deActivateMode = () => {
        this.setState({
            EditMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e: any) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }


    render() {

        return (
            <div>
                {this.state.EditMode &&
                    <div>
                        <span onDoubleClick={this.activateMode}> {this.props.status || "Come on the reds"}</span>
                    </div>
                }
                {!this.state.EditMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus