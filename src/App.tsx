import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import  {Route} from "react-router-dom"
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {ActionsTypes, RootStateType} from "./Redux/store";
import {StoreType} from "./Redux/redux-store";
import {store} from "./Redux/store";


type appPropsType = {
    store: StoreType
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

const App = (props: appPropsType) => {
    const ProfileWithProps = () => <Profile profilePage={state.profileReducer} dispatch={props.dispatch}/>
    const DialogsWithProps = () => <Dialogs dialogsState={state.dialogsReducer} dispatch={props.dispatch}/>

    const state = props.store.getState();

    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">

                        <Route path='/dialogs' element={DialogsWithProps()} // уточнить
                          />
                        <Route path='/profile' element={ProfileWithProps()}/>
                        <Route path='/news' element={<News key={2}/>}/>
                        <Route path='/music' element={<Music key={3}/>}/>
                        <Route path='/settings' element={<Settings key={4}/>}/>

                </div>


            </div>

    );
}

export default App;
