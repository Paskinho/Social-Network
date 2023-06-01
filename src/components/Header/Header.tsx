import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {HeaderContainerType} from "./HeaderContainer";
import btn from '../common/styles/Button.module.css'
;



export const Header = (props: HeaderContainerType) => {
    return <header className={s.header}>
        <div className={s.img}>
        <img src='https://logos-download.com/wp-content/uploads/2017/11/Liverpool_FC_Logo_2012.png'/>
        </div>
<div className={s.loginBlock}>
    {props.isAuth
        ? <div> {props.login} <button className={btn.button} onClick={() => props.logoutTC()}>LogOut</button>  </div>
        :
    <NavLink to={"/login"}>login</NavLink>}
</div>
    </header>
}
