import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, RootStateType, updateNewPostText} from "./Redux/state";
import {state} from "./Redux/state";



export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNetPostText={updateNewPostText}/>
        </React.StrictMode>
    );

}

