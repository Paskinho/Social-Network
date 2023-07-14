import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import  {withRouter} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, MapStateToProps, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import {store, AppStateType} from "./redux/redux-store";
import {Dialogs} from "./components/Dialogs/Dialogs";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));



//
// export  type appPropsType = {
//     store: StoreType
//     // state: RootStateType
//     // dispatch: (action: ActionsTypes) => void
// }

class App extends React.Component<any> {


    componentDidMount() {
        // this.props.toggleIsFetching(true)
        this.props.initializeApp();
    }

    render() {

        if(!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="App">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/profile' element={ <React.Suspense fallback={<Preloader/>}>
                             <ProfileContainer/>
                        </React.Suspense>}/>
                        <Route path='/dialogs' element={
                                <React.Suspense fallback={<Preloader/>}>
                                <DialogsContainer/>
                                </React.Suspense>
                           } // уточнить (добавить withSuspence вызовом функции)
                        />
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path={'*'} element={'404 NOT FOUND'}/>
                    </Routes>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.isInitialized
})

type MapStateToPropsType =[
    initialized: boolean
]

type AppType = MapStateToPropsType



let AppContainer =  compose(withRouter, connect(mapStateToProps,{initializeApp}))(App);

export const SamuraiTSApp = (props: any) => {
    return (
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
    )
}