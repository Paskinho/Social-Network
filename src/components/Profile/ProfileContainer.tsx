import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ServerProfileType, setUserProfileCreator} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import { useParams } from 'react-router-dom';

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

    class ProfileContainer extends React.Component<ProfileContainerType>{


    componentDidMount() {

        // let userId = this.props.match.params.userId;
        // if(!userId) {
        //     userId = 2;
        // }


        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/userId`).then((response) => {
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

export default connect(mapStateToProps, {setUserProfileCreator} ) (WithUrlDataContainerComponent)