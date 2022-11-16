import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {store, RootStateTypeЪ from "./Redux/state";
import {BrowserRouter} from "react-router-dom";


const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} addPost={store.addPost} updateNewPostText={store.updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById("root")
    );

}



rerenderEntireTree(store._state)

store.subscribe(store.rerenderEntireTree)

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

