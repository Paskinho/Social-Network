import {applyMiddleware, combineReducers, createStore} from "redux"
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {appReducer} from "./app-reducer";


export const rootReducer = combineReducers({
    profileReducer, //profilePage: profileReducer
    dialogsReducer,
// sidebarReducer,
    users: usersReducer,
    authReducer,
    form: formReducer,
    app: appReducer

})


export type AppStateType = ReturnType<typeof rootReducer>

export type StoreType = typeof store

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// window.store = store;

// export type AppDispatch = ThunkDispatch<AppStateType, any, AnyAction> УТОЧНИТЬ ТИПИЗАЦИЮ DISPATCH

export default store;