import React from "react";
import preloader from "../../../assets/images/preloader.gif";
import s from './Preloader.module.css'


export const Preloader = () => {
return <div >
    <img alt='loading' className={s.preloader} src={preloader}/>
    </div>
}