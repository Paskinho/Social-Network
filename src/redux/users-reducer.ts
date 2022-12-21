import {v1} from "uuid";

export type usersPageType = {
    users: Array<UsersType>
}

export type UsersType = {
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

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"

type FollowType = ReturnType<typeof followAC>
type UnfollowType = ReturnType<typeof unfollowAC>
type SetUsersType = ReturnType<typeof setUsersAC>

type ActionsTypes = FollowType | UnfollowType | SetUsersType


const initialState: any = {


    users: [
        {
            id: v1(),
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9taqqKhtz24VcVBYynLYkOpZbjC7Dwoy0joiVjptEDFkkiyMZo90jc_Pzm4UKRTYGXvI&usqp=CAU' ,
            followed: true,
            fullName: 'Steven',
            status: 'Im a former Liverpool player and captain',
            location: {city: 'Liverpool', country: 'England'}
        },
        {
            id: v1(),
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdFhh05cvsAAfEWJk1ylo5qcvxhzXqUpSnHlLH487xwoZEGJEuLGcr7wtJTJn5HfNcqX0&usqp=CAU',
            followed: true,
            fullName: 'Kenny',
            status: 'Im a former Liverpool player and best of all time maybe',
            location: {city: 'Glasgow', country: 'Scotland'}
        },
        {
            id: v1(),
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd3BoIJxTrBChzeTZh5kfgHTARphaB4F_sRw&usqp=CAU' ,
            followed: false,
            fullName: 'Luis',
            status: 'Im a former Liverpool player and owner golden boot in season 13/14',
            location: {city: 'Montevideo', country: 'Uruguay'}
        }
    ]
}

export type InitialStateType = typeof initialState

export const usersReducer = (state = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u;
                    }
                )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u;
                    }
                )
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }

        default:
            return state
    }

}


export const followAC = (userId: string) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: []) => ({type: UNFOLLOW, users})