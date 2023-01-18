import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom"
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

//
// export  type appPropsType = {
//     store: StoreType
//     // state: RootStateType
//     // dispatch: (action: ActionsTypes) => void
// }

const App: React.FC = () => {



    return (

            <div className="App">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/dialogs' element={<DialogsContainer/>} // уточнить
                          />
                        <Route path='/profile/userId?' element={<ProfileContainer/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                    </Routes>
                </div>


            </div>

    );
}

export default App;
