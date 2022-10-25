import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";




const App =() => {
  return (
      <BrowserRouter>
    <div className="app-wrapper">
     <Header />
      <Navbar />
    <div className = "app-wrapper-content">

        <Route path={'/dialogs'} render={()=><Dialogs/> }/>
        <Route path={'/profile'} render={()=><Profile/>}/>
        <Route path={'/news'} render={()=><News/>}/>
        <Route path={'/music'} render={()=><Music/>}/>
        <Route path={'/settings'} render={()=><Settings/>}/>



    </div>

    </div>
      </BrowserRouter>
  );
}

export default App;
