import React from 'react';
import s from './ProfileInfo.module.css'



export const ProfileInfo: React.FC = () => {
    return (
        <div>
        <div >
            <img className={s.img} src="https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2021-06/placeholder.jpg?itok=nhe1dpvk"/>
        </div>
    <div className={s.descriptionBlock}>
        ava+description
    </div>
        </div>
)
}

