import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {RootStateType} from "../../redux/store";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    usersPage: InitialStateType
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType=>{
return {
    usersPage: state.users
}
}

type MapDispatchToPropsType = {
    follow: (userId: string)=> void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>)=> void

}


const mapDispatchToProps = (dispatch: any): MapDispatchToPropsType => {
return {
    follow: (userId: string) => {
        dispatch(followAC(userId))
    },
    unfollow: (userId: string) => {
        dispatch(unfollowAC(userId))
    },
    setUsers: (users: Array<UserType>)  => {
        dispatch(setUsersAC(users))
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)