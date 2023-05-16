import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {SamuraiTSApp} from './App';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


ReactDOM.render(
    //<React.StrictMode>
<SamuraiTSApp/>,
    document.getElementById("root")
);



