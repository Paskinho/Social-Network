import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom"
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer, {withRouter} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {compose} from "redux";

//
// export  type appPropsType = {
//     store: StoreType
//     // state: RootStateType
//     // dispatch: (action: ActionsTypes) => void
// }

class App extends React.Component<any> {

    componentDidMount() {
        // this.props.toggleIsFetching(true)
        this.props.getAuthUserData();
    }

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

export default compose(withRouter(connect({getAuthUserData})(App)));
