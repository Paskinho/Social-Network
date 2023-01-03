import React from 'react';
import s from './ProfileInfo.module.css'



export const ProfileInfo: React.FC = (props) => {
    if (!props.profile)

    return (
        <div>
        <div >
            <img className={s.img} src="https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2021-06/placeholder.jpg?itok=nhe1dpvk"/>
        </div>
            <div>
                <img src={props.profile.photo.large}/>
            </div>
        </div>
)
}

