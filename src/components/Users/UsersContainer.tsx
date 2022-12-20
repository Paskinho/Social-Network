import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {RootStateType} from "../../redux/store";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";


const mapStateToProps = (state: RootStateType)=>{
return {
    users: state.usersPage.users
}
}
const mapDispatchToProps = ()=>{
return {
    follow: (userId) => {
        dispatch(followAC(userId))
    },
    unfollow: (userId) => {
        dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users))
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)