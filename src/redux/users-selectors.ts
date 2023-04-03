import {AppStateType} from "./redux-store";
import {createSelector} from 'reselect'


export const getUsersSelector = (state: AppStateType) => {
    return state.authReducer.users
}


export const getUsers= createSelector(getUsersSelector,(users) => {
    return users.filter(u => true)
})

export const getPageSize = (state: AppStateType) => {
    return state.users.pageSize
}

export const getTotalUsersCounter = (state: AppStateType) => {
    return state.users.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.users.page
}

export const getIsFetching = (state: AppStateType) => {
    return state.users.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.users.followingInProgress
}