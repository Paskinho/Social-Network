import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile"
            style={(params)=> {
                return {color: params.isActive ? "red" : "darkred"}
            }
            }>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" style={(params)=> {
                return {color: params.isActive ? "red" : "darkred"}
            }
            }>Message</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/users" style={(params)=> {
                return {color: params.isActive ? "red" : "darkred"}
            }
            }>Users</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" style={(params)=> {
                return {color: params.isActive ? "red" : "darkred"}
            }
            }>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" style={(params)=> {
                return {color: params.isActive ? "red" : "darkred"}
            }
            }>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" style={(params)=> {
                return {color: params.isActive ? "red" : "darkred"}
            }
            }>Settings</NavLink>
        </div>

    </nav>
}

