import React, {FC} from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {InitialStateType, toggleIsFetching, toggleIsFollowingProgress} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {UsersPropsType} from "./UsersContainer";
import {Paginator} from "../common/Paginator/Paginator";


type UserType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    unfollow: (userId: string) => void
    follow: (userId: string) => void
    onPageChanged: (p: number) => void
    usersPage: InitialStateType
    toggleIsFollowingProgress: any// нужно будет уточнять
user: UserType
}

export const User:FC<UserType> = ({user, toggleIsFollowingProgress,...props}) => {


    const followHandler = (u: any) => {
        props.follow(u.id)
    }

    const unFollowHandler = (u: any) => {
        props.unfollow(u.id)

    }

    return <div>
                <span>
        <div>
            <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                </NavLink>
    </div>
    <div>
    {u.followed ?
        <button disabled={toggleIsFollowingProgress.some((id: string) => id === u.id)}
                onClick={unFollowHandler}>UnFollow</button>
        : <button disabled={toggleIsFollowingProgress.some((id: string) => id === u.id)}
                  onClick={followHandler}>Follow</button>

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

            </div>
}