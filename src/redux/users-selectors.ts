import {AppStateType} from "./redux-store";
import {createSelector} from 'reselect'

export const getUsers = (state: AppStateType) => {
    return state.authReducer.users.filter(u => true) // return state.users.filter(u => true) так в пути самурая
}

export const getUsersSuper = createSelector(() => {

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