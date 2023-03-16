import {v1} from "uuid";
import {profilePageType} from "./profile-reducer";
import {authAPI} from "../api/api";



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
    isAuth: boolean

}


type UsersActionsTypes = setUserDataACType

const initialState: InitialStateType = {
    users:[],
   userId: null,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state:InitialStateType = initialState, action: UsersActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }

        default:
            return state
    }

}

type setUserDataACType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (data: InitialStateType) => (
    {type: "SET_USER_DATA",  payload: data} as const)

export const getAuthUserData = () => (dispatch: any)  => {
    authAPI.me()
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch (setAuthUserData(response.data.data.login))
            }
        })
}

export const login = ({email, password, rememberMe}: any) => (dispatch: any)  => {
    authAPI.me()
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch (setAuthUserData(response.data.data.login))
            }
        })
}

