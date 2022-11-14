import React from 'react';
import './index.css';
import {state} from "./Redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, RootStateType, updateNewPostText} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";



export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById("root")
    );

}



rerenderEntireTree(state)

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );


// // ReactDOM.render (
// <BrowserRouter>
//   <App state={state}/>
// </BrowserRouter>, document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

