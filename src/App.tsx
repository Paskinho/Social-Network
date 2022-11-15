import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {RootStateType, state} from "./Redux/state";
import {addPost} from "./Redux/state";


type appPropsType = {
    state: RootStateType
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
}

const App = (props: appPropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs

                            state={props.state.dialogsPage}
                            newPostText={props.state.myPostsPage.newPostText}/>}/>
                        <Route path='/profile' element={<Profile
                            myPostPage={props.state.myPostsPage}
                            addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}/>}/>
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
