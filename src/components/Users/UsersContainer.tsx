import React, {Component} from "react";
import {connect} from "react-redux";
import {
    follow,
    getUsersThunkCreator,
    setCurrentPage,
    setUsers,
    toggleIsFollowingProgress,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCounter,
    getUsers
} from "../../redux/users-selectors";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class UsersAPIComponent extends Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    // showMore = () => this.props.showMore()

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render= () => {
        return (
            this.props.isFetching ? <Preloader/> :
            <Users {...this.props}/>
        )
    }
}

type MapStateToPropsType = {
    usersPage: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    toggleIsFollowingProgress: any
}

type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setCurrentPage: (p: number) => void
    setUsers: (users: Array<UserType>) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    onPageChanged: (p: number) => void

}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCounter(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        toggleIsFollowingProgress: getFollowingInProgress(state),
    }
}

const UsersContainer = connect
(mapStateToProps, {
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
    ), withAuthRedirect)(UsersContainer);