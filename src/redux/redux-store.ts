import {AnyAction, applyMiddleware, combineReducers, compose, createStore} from "redux"
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk';
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


// const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
//
// window.store = store;

export type AppDispatch = ThunkDispatch<AppStateType, any, AnyAction>
export default store;


