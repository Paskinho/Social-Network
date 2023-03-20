import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getStatus,
    getUserProfile,
    ServerProfileType,
    setUserProfileCreator,
    updateStatus
} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {useParams} from 'react-router-dom';
import {compose} from "redux";


// type withRouterType = {
//     Children: string
//
// }

export function withRouter(Children: any) {
    return (props: any) => {

        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

type ProfileContainerType = MapStateType & MapDispatchType & PathParamsType

type PathParamsType = {
    userId: string
}

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {

        let userId = this.props.userId; //this.props.match.params.userId
        if (!userId) {
            userId = this.props.userId; // authorizedUserId in SamuraiWay
        }

        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />// уточнить по isAuth
        )
    }
}

type MapStateType = {
    profile: ServerProfileType | null
    status: string

}
const actions = {
    getUserProfile,
    getStatus,
    updateStatus
}

type MapDispatchType = typeof actions

// type AuthRedirectComponentType = {
//
// }
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    authorizedUserId: state.authReducer.userId,
    isAuth: state.authReducer.isAuth
})

export type ProfileType = MapStateType & MapDispatchType

// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer);