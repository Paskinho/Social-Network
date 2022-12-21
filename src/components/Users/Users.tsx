import React from "react";
import s from './Users.module.css'
import {UsersType} from "../../redux/users-reducer";


export const Users: React.FC = () => {
    return <div>
        {
            users.map (u => <div> key={u.id}
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
                        <div></div>
                        <div></div>
                    </span>
                    <span>
                        <div></div>
                        <div></div>
                    </span>
                </span>

            </div>)
        }
    </div>
}