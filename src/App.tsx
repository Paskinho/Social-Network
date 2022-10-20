import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/MyPosts/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter} from "react-router-dom"

const App =() => {
  return (
    <div className="app-wrapper">
     <Header />
      <Navbar />
    <div className = "app-wrapper-content">
        <BrowserRouter component ={Dialogs} />
        <BrowserRouter component ={Profile}/>
        {/*<Dialogs />*/}
        <Profile />
    </div>

    </div>
  );
}

export default App;
