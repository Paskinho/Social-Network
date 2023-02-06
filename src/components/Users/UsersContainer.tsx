import React, {Component} from "react";
import {connect} from "react-redux";
import {
    follow, getUsersThunkCreator,
    InitialStateType,
    setCurrentPage, toggleIsFollowingProgress,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import { Dispatch } from "redux";
import {Users} from "./Users";
import axios from "axios";
import {Preloader} from "../common/Preloader/Preloader";
import { usersAPI} from "../../api/api";





 class UsersContainer extends Component<UsersPropsType> {

    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize);

        // this.props.toggleIsFetching(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        // })

    }

    // showMore = () => this.props.showMore()

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
   return <>
       {this.props.isFetching ? <Preloader/> : null}
       <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      unfollow={this.props.unfollow}
                      follow={this.props.unfollow}
                      onPageChanged={this.onPageChanged}
                      usersPage={this.props.usersPage}
              toggleIsFollowingProgress={[]}//захардкоженное значение НУЖНО УТОЧНИТЬ!!!!
        />
</>
       }
}


type MapStateToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchToPropsType = {
    follow: (userId: string)=> void
    unfollow: (userId: string) => void
    setCurrentPage: (p: number)=> void
    setUsers: (users: Array<UserType>)=> void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void

}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType=>{
return {
    usersPage: state.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching
}
}


//
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
// return {
//     follow: (userId: string) => {
//         dispatch(followAC(userId))
//     },
//     unfollow: (userId: string) => {
//         dispatch(unfollowAC(userId))
//     },
//     setUsers: (users: Array<UserType>)  => {
//         dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (pageNumber:number)=> {
//         dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: (totalCount:number)=> {
//         dispatch(setTotalUsersCountAC(totalCount))
//     },
//     toggleIsFetching: (isFetching: boolean) => {
//         dispatch(toggleIsFetchingAC(isFetching))
//     }
// }
// }

export default connect(mapStateToProps, {
    follow: follow,
    unfollow: unfollow,
    setCurrentPage: setCurrentPage,
    toggleIsFollowingProgress,
    getUsers: getUsersThunkCreator,
})(UsersContainer);




