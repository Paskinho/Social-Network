import React, {Component} from "react";
import {connect} from "react-redux";
import {
    follow, getUsersThunkCreator,
    InitialStateType,
    setCurrentPage, setUsers, toggleIsFollowingProgress,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {Users} from "./Users";
import axios from "axios";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class UsersAPIComponent extends Component<UsersPropsType> {

    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);

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
                   toggleIsFollowingProgress={this.props.isFetching}//захардкоженное значение НУЖНО УТОЧНИТЬ!!!!
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
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setCurrentPage: (p: number) => void
    setUsers: (users: Array<UserType>) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void

}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
    }
}

const UsersContainer = connect(mapStateToProps, {
    follow: follow,
    unfollow: unfollow,
    setCurrentPage: setCurrentPage,
    toggleIsFollowingProgress,
    setUsers: setUsers,
    getUsers: getUsersThunkCreator,
})(UsersAPIComponent);

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
            follow: follow,
            unfollow: unfollow,
            setCurrentPage: setCurrentPage,
            toggleIsFollowingProgress,
            setUsers: setUsers,
            getUsers: getUsersThunkCreator
        }
    ))(UsersContainer);


