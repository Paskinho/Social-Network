import React from "react";
import s from './Users.module.css'
import {UsersType} from "../../redux/users-reducer";


export const Users: React.FC = () => {
    return <div>
        {
            users.map ((u:any) => <div> key={u.id}
<span>
<div>
    <img src ={u.photoUrl}/>
</div>
<div>
    <button>Follow</button>
</div>
</span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>

            </div>)
        }
    </div>
}