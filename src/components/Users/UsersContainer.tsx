import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {RootStateType} from "../../redux/store";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    usersPage: Array<UsersType>
}


const mapStateToProps = (state: AppStateType)=>{
return {
    usersPage: state.users
}
}
const mapDispatchToProps = ()=>{
return {
    follow: (userId: string) => {
        dispatch(followAC(userId))
    },
    unfollow: (userId: string) => {
        dispatch(unfollowAC(userId))
    },
    setUsers: (users: Array<UsersType>)  => {
        dispatch(setUsersAC(users))
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)