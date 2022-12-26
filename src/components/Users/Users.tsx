import React, {Component} from "react";
import s from './Users.module.css'
import axios from 'axios';
import {UsersPropsType} from "./UsersContainer";
import userPhoto from "../../assets/images/user.png"






export class Users extends Component<UsersPropsType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}$count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items)
        })

    }

    // showMore = () => this.props.showMore()

    render() {
        // const filteredUser = this.props.usersPage.users.filter((u, i) => i < this.props.usersPage.count)

        const  pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        const pages = [];
        for (let i= 1; i <= pagesCount; i++) {
            pages.push(i)
        }




    return <div>
        <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p ? s.selectedPage : ""}>{p}</span>
                })}

            </div>
        </div>
        {
            this.props.usersPage.users.map ((u:any) => <div> key={u.id}
<span>
<div>
    <img src ={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
</div>
<div>
    {u.followed ?
        <button onClick={()=> {this.props.unfollow(u.id)}}>UnFollow</button>
        : <button onClick={()=> {this.props.follow(u.id)}}>Follow</button>

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
}



