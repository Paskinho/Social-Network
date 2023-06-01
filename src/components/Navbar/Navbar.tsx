import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

//ИЗБАВИТЬСЯ ОТ ДУБЛИРОВАНИЯ



export const Navbar = () => {


    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile"
            style={(params)=> {
                return {color: params.isActive ? "red" : "darkcyan",
                textDecoration:'none'}
            }
            }>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" style={(params)=> {
                return {color: params.isActive ? "red" : "darkcyan",
                    textDecoration:'none'}
            }
            }>Message</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/users" style={(params)=> {
                return {color: params.isActive ? "red" : "darkcyan", textDecoration:'none'
                }
            }
            }>Users</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" style={(params)=> {
                return {color: params.isActive ? "red" : "darkcyan",
                    textDecoration:'none'}
            }
            }>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" style={(params)=> {
                return {color: params.isActive ? "red" : "darkcyan", textDecoration:'none'}
            }
            }>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" style={(params)=> {
                return {color: params.isActive ? "red" : "darkcyan",  textDecoration:'none'}
            }
            }>Settings</NavLink>
        </div>

    </nav>
}

