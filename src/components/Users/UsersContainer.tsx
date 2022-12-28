import React, {Component} from "react";
import {connect} from "react-redux";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import { Dispatch } from "redux";
import {Users} from "./Users";
import axios from "axios";
import preloader from "../../assets/images/preloader.gif"




 class UsersContainer extends Component<UsersPropsType> {


    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}$count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })

    }

    // showMore = () => this.props.showMore()


    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}$count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);})
    }

    render() {
   return <>
       {this.props.isFetching ? <img src={preloader}/> : null}
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      unfollow={this.props.unfollow}
                      follow={this.props.unfollow}
                      onPageChanged={this.onPageChanged}
                      usersPage={this.props.usersPage}
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
    setUsers: (users: Array<UserType>)=> void
    setCurrentPage: (p: number)=> void
    setTotalUsersCount:(count: number) => void
    toggleIsFetching: (isFetching: boolean) => void

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
    },
    setCurrentPage: (pageNumber:number)=> {
        dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount:number)=> {
        dispatch(setTotalUsersCountAC(totalCount))
    },
    toggleIsFetching: (isFetching: boolean) => {
        dispatch(toggleIsFetchingAC(isFetching))
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)