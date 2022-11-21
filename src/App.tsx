import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {ActionsTypes, RootStateType, StoreType} from "./Redux/state";
import {store} from "./Redux/state";


type appPropsType = {
    state: RootStateType
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

const App = (props: appPropsType) => {

    const state = props.store.getState();

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs
                            store={props.store}

                            state={state.dialogsPage}
                            newPostText={state.myPostsPage.newPostText}/>}/>
                        <Route path='/profile' element={<Profile
                            myPostPage={props.state.myPostsPage}
                            dispatch={props.dispatch}/>}/>
                        <Route path='/news' element={<News key={2}/>}/>
                        <Route path='/music' element={<Music key={3}/>}/>
                        <Route path='/settings' element={<Settings key={4}/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
