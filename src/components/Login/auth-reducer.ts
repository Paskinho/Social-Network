import {authAPI, securityAPI} from "../../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {LoginFormType} from "./Login";
import {AppDispatch} from "../../redux/redux-store";


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
    userId: number | null,
    email: string | null,
    login: string | null
    users: Array<UserType>
    isAuth: boolean
    captchaUrl: string | null
}

type UsersActionsTypes = setUserDataACType | getCaptchaUrlACType

const initialState: InitialStateType = {
    users: [],
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

export const authReducer = (state: InitialStateType = initialState, action: UsersActionsTypes): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return  {
                ...state,
                ...action.payload
            }


        default:
            return state
    }

}

type setUserDataACType = ReturnType<typeof setAuthUserData>
type getCaptchaUrlACType = ReturnType<typeof getCaptchaUrlSuccess>

const SET_USER_DATA = "social-network/auth/SET_USER_DATA"
const GET_CAPTCHA_URL_SUCCESS = 'social-network/auth/GET_CAPTCHA_URL_SUCCESS'


export const setAuthUserData = (data: InitialStateType) => (
    {type: SET_USER_DATA, payload: data} as const)

export const getCaptchaUrlSuccess = (captchaURL: string) => (
    {type: GET_CAPTCHA_URL_SUCCESS, payload:{captchaURL}}
)




export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData({...response.data.users, isAuth: true}))
    }
}


export type AuthFromLogin = (loginData: LoginFormType) => void
export const loginTC: AuthFromLogin = (loginData) => async (dispatch: AppDispatch) => {
    const response = await authAPI.login(loginData)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData) // поменял. Ранее был setAuthUserData
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrlTC())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}))
    }
    console.log(response)
}

export const getCaptchaUrlTC = () => async (dispatch: AppDispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUtl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUtl))
}


    export const logoutTC = () => async (dispatch: any) => {
        let response = await authAPI.logout()
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData)  // (null, null, null, false)
                }

    }