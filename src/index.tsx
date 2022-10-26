import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [  //myPostsData
    {id: 1, like: "5", message: "Hello, how are you?"},
    {id: 2, like: "10", message: "This is my first post)?"},

]

let dialogs = [
    {id: 1, name: "Trent"},
    {id: 2, name: "Virgil"},
    {id: 3, name: "Mohamed"},
    {id: 4, name: "Darwin"},
    {id: 5, name: "Roberto"},
    {id: 6, name: "Thiago"},
]




let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you IT-Kamasutra"},
    {id: 3, message: "YO"},
    {id: 4, message: "YO"},
    {id: 5, message: "YO"},
    {id: 6, message: "YO"},
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
