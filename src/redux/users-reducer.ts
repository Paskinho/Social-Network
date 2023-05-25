import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {AppDispatch} from "./redux-store";


export type UserType = {
    id: string,
    photoUrl: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType
}

type LocationType = {
    city: string,
    country: string

}
export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    page: number
    isFetching: boolean
    followingInProgress: number []
}


export const followSuccess = (userId: string) => (
    {type: "users/FOLLOW", payload: userId} as const)
export const unfollowSuccess = (userId: string) => (
    {type: "users/UNFOLLOW", payload: userId} as const)
export const setUsers = (users: Array<UserType>) => (
    {type: "users/SET_USERS", payload: {newState: users}} as const)
export const setCurrentPage = (currentPage: number) => (
    {type: "users/SET_CURRENT_PAGE", payload: currentPage} as const)
export const setTotalUsersCount = (totalCount: number) => (
    {type: "users/SET_TOTAL_USERS_COUNT", payload: totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => (
    {type: 'users/TOGGLE_IS_FETCHING', payload: isFetching} as const)
export const toggleIsFollowingProgress = (followingIsProgress: boolean, userId: number) => (
    {type: 'users/TOGGLE_IS_FOLLOWING_PROGRESS', payload: followingIsProgress, userId} as const
)


export type getUsersThunkCreatorPropsType = (page: number, pageSize: number) => void
export const getUsersThunkCreator: getUsersThunkCreatorPropsType = (page, pageSize) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setCurrentPage(page))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}

const followUnFollowFlow = async (dispatch: AppDispatch, userId: any, apiMethod: any, actionCreator: any) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    let response = await usersAPI.follow(userId)
    if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId));
}

export const follow = (userId: any) => { // уточнить по типизации, в одном месте number, в другом string
    return async (dispatch: any) => {
        followUnFollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
    }
}

export const unfollow = (userId: any) => { // уточнить по типизации, в одном месте number, в другом string
    return async (dispatch: any) => {
        followUnFollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}


type FollowType = ReturnType<typeof followSuccess>
type UnfollowType = ReturnType<typeof unfollowSuccess>
type SetUsersType = ReturnType<typeof setUsers>
type SetCurrentPageType = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>
type ToggleIsFollowingProgressType = ReturnType<typeof toggleIsFollowingProgress>

type UsersActionsTypes =
    FollowType
    | UnfollowType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalUsersCountType
    | ToggleIsFetchingType
    | ToggleIsFollowingProgressType

const initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    page: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'users/FOLLOW':
            return {
                ...state,
                // users: updateObjectInArray(state.users, action.payload, 'id', {followed: true} )
                users: state.users.map((u: any) => {
                        if (u.id === action.payload) {
                            return {...u, followed: true}
                        }
                        return u;
                    }
                )
            }
        case 'users/UNFOLLOW':
            return {
                ...state,
                // users: updateObjectInArray(state.users, action.payload, 'id', {followed: false} )
                users: state.users.map((u: any) => {
                        if (u.id === action.payload) {
                            return {...u, followed: false}
                        }
                        return u;
                    }
                )
            }
        case 'users/SET_USERS':
            return {
                ...state, users: action.payload.newState
            }
        case "users/SET_CURRENT_PAGE":
            return {
                ...state, page: action.payload
            }
        case "users/SET_TOTAL_USERS_COUNT" :
            return {
                ...state, totalUsersCount: action.payload
            }
        case 'users/TOGGLE_IS_FETCHING' :
            return {
                ...state, isFetching: action.payload
            }
        case 'users/TOGGLE_IS_FOLLOWING_PROGRESS' :
            return {
                ...state,
                followingInProgress: action.payload ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }

}