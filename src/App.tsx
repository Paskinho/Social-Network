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
import {state} from "./redux/state";




type AppPropsType = {
    state: []
}


function App (props: AppPropsType) {


}
  return (
      <BrowserRouter>
    <div className="app-wrapper">
     <Header />
      <Navbar />
    <div className = "app-wrapper-content">
        <Routes>
            <Route path="/"
                   element={<Profile postData={props.state.profilePage.postData}/>}/>
            <Route path="/dialogs"
                   element={<Dialogs users={props.state.messagesPage.users}
                                     messages={props.state.messagesPage.messages}/>}/>

        {/*<Route path={'/dialogs'} render={()=><Dialogs/> }/>*/}
        {/*<Route path={'/profile'} render={()=><Profile/>}/>*/}
        {/*<Route path={'/news'} render={()=><News/>}/>*/}
        {/*<Route path={'/music'} render={()=><Music/>}/>*/}
        {/*<Route path={'/settings'} render={()=><Settings/>}/>*/}

        </Routes>

    </div>

    </div>
      </BrowserRouter>
  );
}

export default App;
