import {v1} from "uuid";
import {profilePageType} from "./profile-reducer";



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
    currentPage: number
    isFetching: boolean

}


export const follow = (userId: string) => (
    {type: "FOLLOW",  payload: userId} as const)
export const unfollow = (userId: string) => (
    {type: "UNFOLLOW", payload: userId} as const)
export const setUsers = (users: Array<UserType>) => (
    {type: "SET_USERS",  payload: {newState: users} } as const)
export const setCurrentPage = (currentPage: number) => (
    {type: "SET_CURRENT_PAGE", payload: currentPage} as const)
export const setTotalUsersCount = (totalCount: number) => (
    {type: "SET_TOTAL_USERS_COUNT", payload: totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => (
    {type: 'TOGGLE_IS_FETCHING', payload: isFetching} as const
)

type FollowType = ReturnType<typeof follow>
type UnfollowType = ReturnType<typeof unfollow>
type SetUsersType = ReturnType<typeof setUsers>
type SetCurrentPageType = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>

type UsersActionsTypes = FollowType | UnfollowType | SetUsersType | SetCurrentPageType | SetTotalUsersCountType | ToggleIsFetchingType

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}


export const usersReducer = (state:InitialStateType = initialState, action: UsersActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map((u: any) => {
                        if (u.id === action.payload) {
                            return {...u, followed: true}
                        }
                        return u;
                    }
                )
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map((u: any) => {
                        if (u.id === action.payload) {
                            return {...u, followed: false}
                        }
                        return u;
                    }
                )
            }
        case 'SET_USERS':
            return {
                ...state, users: action.payload.newState
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state,currentPage: action.payload
            }
        case "SET_TOTAL_USERS_COUNT" :
            return {
                ...state,totalUsersCount: action.payload
            }
        case 'TOGGLE_IS_FETCHING' :
            return  {
                ...state,isFetching: action.payload
            }
        default:
            return state
    }

}


