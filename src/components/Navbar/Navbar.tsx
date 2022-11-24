import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile"
            style={(params)=> {
                return {color: params.isActive ? "red" : "black"}
            }
            }>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs">Message</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news">News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music">Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings">Settings</NavLink>
        </div>
    </nav>
}

