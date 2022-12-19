import {combineReducers, createStore} from "redux"
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

let rootReducer = combineReducers({
    profileReducer, //profilePage: profileReducer
    dialogsReducer,
// sidebarReducer
})


export type AppStateType = ReturnType<typeof rootReducer>

export type StoreType = typeof store

const store = createStore(rootReducer);

// window.store = store;

export default store;