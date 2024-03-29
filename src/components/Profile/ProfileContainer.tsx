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

export type WrappedComponentWithRouterPropsType = {
    userId: string;
    // location: locationType;
};


// export const withRouter =
//     (WrappedComponent: any) => (props: WrappedComponentWithRouterPropsType) => {
//         const params = useParams<'userId'>();
//         // const location = useLocation();
//         return <WrappedComponent {...props} userId={params.userId}/>;
//     };

export type ProfileContainerType = MapStateType & MapDispatchType & PathParamsType

export type PathParamsType = {
    userId: string
}

class ProfileContainer extends React.Component<ProfileContainerType> {


    refreshProfile (): void {
        let userId = this.props.userId; //this.props.match.params.userId либо //
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

export type Nullable<T> = T | null;

type MapStateType = {
    profile: ServerProfileType // должно быть ServerProfileType | null НАДО РАЗОБРАТЬСЯ!
    status: string
    authorizedUserId: string //Nullable<String>
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
    authorizedUserId: state.authReducer.userId,
    // isAuth: state.authReducer.isAuth
})

export type ProfileType = MapStateType & MapDispatchType

// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter
)(ProfileContainer);