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
    userId: any,
    email: any,
    login: any
    users: Array<UserType>

}


export const follow = (userId: string) => (
    {type: "FOLLOW",  payload: userId} as const)
export const unfollow = (userId: string) => (
    {type: "UNFOLLOW", payload: userId} as const)


type FollowType = ReturnType<typeof follow>
type UnfollowType = ReturnType<typeof unfollow>



type UsersActionsTypes = FollowType | UnfollowType

const initialState: InitialStateType = {
    users:[],
   userId: null,
    email: null,
    login: null
}


export const authReducer = (state:InitialStateType = initialState, action: UsersActionsTypes): InitialStateType => {

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

        default:
            return state
    }

}


