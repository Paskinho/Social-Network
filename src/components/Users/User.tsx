import React, {FC} from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {InitialStateType, toggleIsFetching, toggleIsFollowingProgress} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {UsersPropsType} from "./UsersContainer";
import {Paginator} from "../common/Paginator/Paginator";


type UserType = {
    unfollow: (userId: string) => void
    follow: (userId: string) => void
    toggleIsFollowingProgress: any// нужно будет уточнять
    user: any
}

export const User: FC<UserType> = ({user, toggleIsFollowingProgress, ...props}) => {

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
            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto}/>
                </NavLink>
    </div>
    <div>
    {user.followed ?
        <button disabled={toggleIsFollowingProgress.some((id: string) => id === user.id)}
                onClick={unFollowHandler}>UnFollow</button>
        : <button disabled={toggleIsFollowingProgress.some((id: string) => id === user.id)}
                  onClick={followHandler}>Follow</button>

    }
        </div>
        </span>
        <span>
        <span>
            <div>{user.name}</div>
        <div>{user.status}</div>
        </span>
        <span>
        <div>{"u.location.country"}</div>
        <div>{"u.location.city"}</div>
        </span>
        </span>

    </div>
}