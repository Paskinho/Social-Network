import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";





 class ProfileContainer extends React.Component<any , any>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
            this.props.setUserProfile(response.data)
        })

    }

    render () {
    return (
        <Profile {...this.props}/>
    )
    }
}


let mapStateToProps = () => ({
    a: 13
})


export default connect(mapStateToProps, ) (ProfileContainer)