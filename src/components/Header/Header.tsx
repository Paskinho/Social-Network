import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {MapStateToPropsType} from "./HeaderContainer";
;



export const Header = (props: MapStateToPropsType) => {
    return <header className={s.header}>
        <img  src='https://logos-download.com/wp-content/uploads/2017/11/Liverpool_FC_Logo_2012.png'/>
<div className={s.loginBlock}>
    {props.isAuth ? props.login :
    <NavLink to={"/login"}>login</NavLink>}
</div>
    </header>
}
