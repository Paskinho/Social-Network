import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";


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
                ...action.payload
            }

        default:
            return state
    }

}

type setUserDataACType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (data: InitialStateType) => (
    {type: "SET_USER_DATA",  payload: data} as const)

export const getAuthUserData = () => (dispatch: Dispatch)  => {
   return authAPI.me()
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch (setAuthUserData({...response.data,isAuth: true}))
            }
        })
}

export const login = ({email, password, rememberMe}: any) => (dispatch: any)  => {
    authAPI.login(email, password, rememberMe)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData)
            }
            else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error' ;
                dispatch(stopSubmit('login', {_error: message}))
            }

        })
}

export const logout = () => (dispatch: any)  => {
    authAPI.logout()
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData)  // (null, null, null, false)
            }
        })
}