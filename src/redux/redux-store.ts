import {applyMiddleware, combineReducers, createStore} from "redux"
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';

export const rootReducer = combineReducers({
    profileReducer, //profilePage: profileReducer
    dialogsReducer,
// sidebarReducer,
    users: usersReducer,
    authReducer

})


export type AppStateType = ReturnType<typeof rootReducer>

export type StoreType = typeof store

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// window.store = store;

export default store;