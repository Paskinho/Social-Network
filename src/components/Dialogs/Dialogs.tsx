import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    <NavLink to="/dialogs/1">Trent</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Virgil</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3"> Mohamed</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Darwin</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Roberto</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Thiago</NavLink>
                </div>

            </div>
            <div className="messages">
                <div className="message">Hi</div>
                <div className="message">How are you IT-Kamasutra</div>
                <div className="message">YO</div>
            </div>
            Dialogs
        </div>
    )
}