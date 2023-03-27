import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";


type InitialStateType = {
    initialized: boolean
}

type UsersActionsTypes = setUserDataACType

const initialState: InitialStateType = {
    initialized: false
}

type setUserDataACType = ReturnType<typeof initializedSuccess>

const SET_INITIALIZED = 'SET-INITIALIZED';

export const appReducer = (state: InitialStateType = initialState, action: UsersActionsTypes): InitialStateType => {

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

// export const initializedSuccess = (data: InitialStateType) => (
//     {type: SET_INITIALIZED,  payload: data} as const)

export const initializedSuccess = () => (
    {type: SET_INITIALIZED} as const)

export const initializeApp = () => (dispatch: any) => { //проверить типизацию диспатчей
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}