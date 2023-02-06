import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {InitialStateType, toggleIsFetching, toggleIsFollowingProgress} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";


type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    unfollow: (userId: string) => void
    follow: (userId: string) => void
    onPageChanged: (p: number) => void
    usersPage: InitialStateType
    toggleIsFollowingProgress: any// нужно будет уточнять

}

export const Users = (props: UsersType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    const followHandler = (u:any) => {
       props.follow(u.id)
    }

    const unFollowHandler = (u:any) => {
       props.unfollow(u.id)

    }


    return <div>


        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : ""}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}

            </div>
        </div>
        {
            props.usersPage.users.map((u: any) => <div> key={u.id}
                <span>
        <div>
            <NavLink to={'/profile/' + u.id}>
            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                </NavLink>
    </div>
    <div>
    {u.followed ?
        <button disabled={props.toggleIsFollowingProgress.some((id: string) => id === u.id)}  onClick={unFollowHandler}>UnFollow</button>


        : <button disabled={props.toggleIsFollowingProgress.some((id: string)=> id === u.id)} onClick={followHandler}>Follow</button>

    }
        </div>
        </span>
                <span>
        <span>
            <div>{u.name}</div>
        <div>{u.status}</div>
        </span>
        <span>
        <div>{"u.location.country"}</div>
        <div>{"u.location.city"}</div>
        </span>
        </span>

            </div>)
        }
    </div>
}