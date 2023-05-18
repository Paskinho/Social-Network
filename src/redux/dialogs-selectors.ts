import {AppStateType} from "./redux-store";


export const getDialogsPage = (state: AppStateType) => {
    return state.dialogsReducer
}