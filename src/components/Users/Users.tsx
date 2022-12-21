import React from "react";
import s from './Users.module.css'
import {v1} from "uuid";
import {UserType} from "../../redux/users-reducer";
import {UsersPropsType} from "./UsersContainer";






export const Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
    props.setUsers(
        [
            {
                id: v1(),
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9taqqKhtz24VcVBYynLYkOpZbjC7Dwoy0joiVjptEDFkkiyMZo90jc_Pzm4UKRTYGXvI&usqp=CAU' ,
                followed: true,
                fullName: 'Steven',
                status: 'Im a former Liverpool player and captain',
                location: {city: 'Liverpool', country: 'England'}
            },
            {
                id: v1(),
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdFhh05cvsAAfEWJk1ylo5qcvxhzXqUpSnHlLH487xwoZEGJEuLGcr7wtJTJn5HfNcqX0&usqp=CAU',
                followed: true,
                fullName: 'Kenny',
                status: 'Im a former Liverpool player and best of all time maybe',
                location: {city: 'Glasgow', country: 'Scotland'}
            },
            {
                id: v1(),
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd3BoIJxTrBChzeTZh5kfgHTARphaB4F_sRw&usqp=CAU' ,
                followed: false,
                fullName: 'Luis',
                status: 'Im a former Liverpool player and owner golden boot in season 13/14',
                location: {city: 'Montevideo', country: 'Uruguay'}
            }
        ]
    )
    }

    return <div>
        {
            props.usersPage.users.map ((u:any) => <div> key={u.id}
<span>
<div>
    <img src ={u.photoUrl} className={s.userPhoto}/>
</div>
<div>
    {u.followed ?
        <button onClick={()=> {props.unfollow(u.id)}}>UnFollow</button>
        : <button onClick={()=> {props.follow(u.id)}}>Follow</button>

    }
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