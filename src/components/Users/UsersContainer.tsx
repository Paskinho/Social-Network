import React, {Component, ComponentType} from "react";
import {connect} from "react-redux";
import {
    follow,
    getUsersThunkCreator, getUsersThunkCreatorPropsType,
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
    getTotalUsersCounter, getUsersSelector
} from "../../redux/users-selectors";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStateToPropsType = {
    usersPage: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    toggleIsFollowingProgress: any
    portionSize: number
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCounter(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        toggleIsFollowingProgress: getFollowingInProgress(state),
        portionSize: 10
    }
}

type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setCurrentPage: (p: number) => void
    setUsers: (users: Array<UserType>) => void
    getUsersThunkCreator: getUsersThunkCreatorPropsType
    onPageChanged: (p: number) => void
}


const mapDispatchToProps: MapDispatchToPropsType = {
    follow: follow,
    unfollow: unfollow,
    setCurrentPage: setCurrentPage,
    setUsers: setUsers,
    getUsersThunkCreator: getUsersThunkCreator,
    onPageChanged: p => {}
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersAPIComponent extends Component<UsersPropsType> {


    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    // showMore = () => this.props.showMore()

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render = () => {
        return (
            this.props.isFetching ? <Preloader/> :
                <Users {...this.props}/>
        )
    }
}


// const UsersContainer = connect
// (mapStateToProps, {
//     follow: follow,
//     unfollow: unfollow,
//     setCurrentPage: setCurrentPage,
//     toggleIsFollowingProgress,
//     setUsers: setUsers,
//     getUsers: getUsersThunkCreator,
// })(UsersAPIComponent);

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps
    ), withAuthRedirect)(UsersAPIComponent);