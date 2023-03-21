import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";


 type InitialStateType = {
    initialized: boolean
}

type UsersActionsTypes = setUserDataACType

const initialState: InitialStateType = {
   initialized: false
}

type setUserDataACType = ReturnType<typeof initializedSuccess>

const SET_INITIALIZED = 'SET-INITIALIZED';

export const authReducer = (state:InitialStateType = initialState, action: UsersActionsTypes): InitialStateType => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}

export const initializedSuccess = (data: InitialStateType) => (
    {type: SET_INITIALIZED,  payload: data} as const)

export const initialize = () => (dispatch: Dispatch)  => {

}

