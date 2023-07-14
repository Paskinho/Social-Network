import React, {FC} from "react";
import {InitialStateType} from "../../redux/users-reducer";
import {UsersPropsType} from "./UsersContainer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";


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


export const Users: FC<UsersPropsType> = ({
                                              usersPage,
                                              totalUsersCount,
                                              currentPage,
                                              pageSize,
    portionSize,
                                              toggleIsFollowingProgress,
                                              ...props
                                          }) => {


    const followHandler = (u: any) => {
        props.follow(u.id)
    }

    const unFollowHandler = (u: any) => {
        props.unfollow(u.id)

    }

    return <div>
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                   onPageChanged={props.onPageChanged} portionSize={portionSize}/>
        <div>
            {
                usersPage.map((u: any) => <User unfollow={props.unfollow}
                                                follow={props.follow}
                                                toggleIsFollowingProgress={toggleIsFollowingProgress}
                                                user={u}
                                                key={u.id}/>
                )
            }
        </div>
    </div>
}