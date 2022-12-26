import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom"
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

//
// export  type appPropsType = {
//     store: StoreType
//     // state: RootStateType
//     // dispatch: (action: ActionsTypes) => void
// }

const App: React.FC = () => {



    return (

            <div className="App">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/dialogs' element={<DialogsContainer/>} // уточнить
                          />
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/news' element={<News key={2}/>}/>
                        <Route path='/music' element={<Music key={3}/>}/>
                        <Route path='/settings' element={<Settings key={4}/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                    </Routes>
                </div>


            </div>

    );
}

export default App;
