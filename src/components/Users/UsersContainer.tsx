import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import { Dispatch } from "redux";

type MapStateToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
}

type MapDispatchToPropsType = {
    follow: (userId: string)=> void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>)=> void

}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType=>{
return {
    usersPage: state.users,
    pageSize: 5, // тут через стейт state.usersPage.pageSize у димычы
    totalUsersCount: 0 // тут через стейт state.usersPage.totalUsersCount

}
}



const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
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