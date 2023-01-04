import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ServerProfileType, setUserProfileCreator} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom"





 class ProfileContainer extends React.Component<any , any>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
            this.props.setUserProfileCreator(response.data)
        })

    }

    render () {
    return (
        <Profile profile={this.props.profile}/>
    )
    }
}

type MapStateType = {
    profile: ServerProfileType | null
}
const actions = {
    setUserProfileCreator
}

type MapDispatchType = typeof actions

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profileReducer.profile
})

type ProfileContainerType = MapStateType & MapDispatchType

export type ProfileType = MapStateType

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfileCreator} ) (ProfileContainer)