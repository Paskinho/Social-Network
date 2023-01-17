import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {Header} from "./Header";

class HeaderContainer extends React.Component<any, any> {
    render () {
    return <Header {...this.props}/>
    }
}
