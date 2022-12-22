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
}


export const followAC = (userId: string) => (
    {type: "FOLLOW",  payload: userId} as const)
export const unfollowAC = (userId: string) => (
    {type: "UNFOLLOW", payload: userId} as const)
export const setUsersAC = (users: Array<UserType>) => (
    {type: "SET_USERS",  payload: {newState: users} } as const)

type FollowType = ReturnType<typeof followAC>
type UnfollowType = ReturnType<typeof unfollowAC>
type SetUsersType = ReturnType<typeof setUsersAC>

type UsersActionsTypes = FollowType | UnfollowType | SetUsersType

const initialState: InitialStateType = {
    users: []
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
                ...state, users: [...state.users, ...action.payload.newState]
            }

        default:
            return state
    }

}


