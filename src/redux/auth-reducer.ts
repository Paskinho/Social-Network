import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {LoginFormType} from "../components/Login/Login";
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
    userId: any,
    email: any,
    login: any
    users: Array<UserType>
    isAuth: boolean

}

type UsersActionsTypes = setUserDataACType

const initialState: InitialStateType = {
    users: [],
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: UsersActionsTypes): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }

}

type setUserDataACType = ReturnType<typeof setAuthUserData>

const SET_USER_DATA = "social-network/auth/SET_USER_DATA"

export const setAuthUserData = (data: InitialStateType) => (
    {type: SET_USER_DATA, payload: data} as const)


export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData({...response.data, isAuth: true}))
    }


}
export type AuthFromLogin = (loginData: LoginFormType) => void
export const loginTC: AuthFromLogin = (loginData) => async (dispatch: AppDispatch) => {
    const response = await authAPI.login(loginData)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData()) // поменял. Ранее был setAuthUserData
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}))
    }
}

    export const logoutTC = () => async (dispatch: any) => {
    debugger
        let response = await authAPI.logout()
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData)  // (null, null, null, false)
                }

    }