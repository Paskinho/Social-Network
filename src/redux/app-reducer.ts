import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";
import {AppDispatch} from "./redux-store";


type InitialStateType = {
    isInitialized: boolean
}

type UsersActionsTypes = setUserDataACType

const initialState: InitialStateType = {
    isInitialized: false
}

type setUserDataACType = ReturnType<typeof initializedSuccess>

const SET_INITIALIZED = 'SET-INITIALIZED';

export const appReducer = (state: InitialStateType = initialState, action: UsersActionsTypes): InitialStateType => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                isInitialized: action.payload
            }

        default:
            return state
    }
}

// export const initializedSuccess = (data: InitialStateType) => (
//     {type: SET_INITIALIZED,  payload: data} as const)

export const initializedSuccess = (isInitialized: boolean) => (
    {type: SET_INITIALIZED, payload: isInitialized} as const)

export const initializeApp = () => (dispatch: AppDispatch) => { //проверить типизацию диспатчей
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(initializedSuccess(true))
    })
}