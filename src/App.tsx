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

const App =() => {
  return (
      <BrowserRouter>
    <div className="app-wrapper">
     <Header />
      <Navbar />
    <div className = "app-wrapper-content">
        <Routes>
        <Route path='/dialogs' element={Dialogs} />
        <Route path='/profile' element={Profile}/>
        <Route path='/news' element={News}/>
        <Route path='/music' element={Music}/>
        <Route path='/settings' element={Settings}/>
        </Routes>
    </div>

    </div>
      </BrowserRouter>
  );
}

export default App;
