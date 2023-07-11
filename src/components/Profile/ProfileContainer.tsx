import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getStatus,
    getUserProfile,
    savePhoto,
    saveProfile,
    ServerProfileType,
    updateStatus
} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {useParams} from 'react-router-dom';
import {compose} from "redux";
import router from 'react-router-dom';
import {MatchRenderProps, RouteComponentProps} from "@reach/router";
import {LoginFormType} from "../Login/Login";

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
    userId: number
}

class ProfileContainer extends React.Component<ProfileContainerType & MatchRenderProps<any>> {


    refreshProfile () {
        let _userId: any = this.props.userId; //this.props.match.params.userId либо
        let userId = this.props.match.params.userId; //this.props.match.params.userId либо //
        // this.props.match.params.userId as PathParamsType
        if (!userId) {
            userId = this.props.authorizedUserId; // authorizedUserId in SamuraiWay
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.userId != prevProps.userId)
        this.refreshProfile()
    }


    render() {
        return (
            <Profile
                {...this.props}
                isOwner={!this.props.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto}
            />// уточнить по isAuth
        )
    }
}

type MapStateType = {
    profile: any // должно быть ServerProfileType | null НАДО РАЗОБРАТЬСЯ!
    status: string
    authorizedUserId: number | null
    isOwner: boolean
    onSubmit: () => void
    saveProfile: (formData:LoginFormType) => void
}

const actions = {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto
}

type MapDispatchType = typeof actions

// type AuthRedirectComponentType = {
//
// }
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    authorizedUserId: state.authReducer.id,
    // isAuth: state.authReducer.isAuth
})

export type ProfileType = MapStateType & MapDispatchType

// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter
)(ProfileContainer);