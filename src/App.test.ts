import React from 'react';
import ReactDOM from "react-dom";
import {SamuraiTSApp} from "./App";

it('renders without crashing', function () {
    const div = document.createElement('div')
    ReactDOM.render(<SamuraiTSApp/>, div);
    ReactDOM.unmountComponentAtNode(div)
});