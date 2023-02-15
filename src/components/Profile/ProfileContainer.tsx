import React, { ComponentType} from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile, ServerProfileType, setUserProfileCreator} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import { useParams } from 'react-router-dom';
import {usersAPI} from "../../api/api";
import {Redirect} from "@reach/router";


// type withRouterType = {
//     Children: string
//
// }

export function withRouter(Children:any) {
    return (props: any) => {

        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}


type ProfileContainerType = MapStateType & MapDispatchType & PathParamsType

type PathParamsType = {
    userId: string
}

    class ProfileContainer extends React.Component<ProfileContainerType>{

    componentDidMount() {

        let userId = this.props.userId; //this.props.match.params.userId
        if(!userId) {
            userId = this.props.userId;
        }

this.props.getUserProfile(userId);

    }

    render () {
        if (this.props.isAuth) return <Redirect to='./login'/>

    return (
        <Profile profile={this.props.profile}
        isAuth={this.props.isAuth}/>// уточнить по isAuth
    )
    }
}




type MapStateType = {
    profile: ServerProfileType | null
    isAuth: boolean
}
const actions = {
    getUserProfile
}

type MapDispatchType = typeof actions

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profileReducer.profile,
    isAuth: state.authReducer.isAuth
})



export type ProfileType = MapStateType

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile} ) (WithUrlDataContainerComponent)