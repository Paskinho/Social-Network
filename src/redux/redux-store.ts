import {applyMiddleware, combineReducers, compose, createStore} from "redux"
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
//
// window.store = store;

// export type AppDispatch = ThunkDispatch<AppStateType, any, AnyAction> УТОЧНИТЬ ТИПИЗАЦИЮ DISPATCH

export default store;