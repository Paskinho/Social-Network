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
import Login from "./components/Login/Login";
import {getUsersThunkCreator} from "./redux/users-reducer";

//
// export  type appPropsType = {
//     store: StoreType
//     // state: RootStateType
//     // dispatch: (action: ActionsTypes) => void
// }

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/profile/userId?' element={<ProfileContainer/>}/>
                        <Route path='/dialogs' element={<DialogsContainer/>} // уточнить
                        />
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default App;
