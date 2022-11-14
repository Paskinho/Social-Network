
import * as serviceWorker from './serviceWorker'
import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from "./render";
import {state} from "./Redux/state";

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
serviceWorker.unregister();
