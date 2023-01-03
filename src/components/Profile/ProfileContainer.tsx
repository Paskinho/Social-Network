import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileCreator} from "../../redux/profile-reducer";





 class ProfileContainer extends React.Component<any , any>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
            this.props.setUserProfileCreator(response.data)
        })

    }

    render () {
    return (
        <Profile {...this.props} profile={this.props.profile}/>
    )
    }
}


let mapStateToProps = () => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setUserProfileCreator} ) (ProfileContainer)