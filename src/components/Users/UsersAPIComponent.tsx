import React, {Component} from "react";
import s from './Users.module.css'
import axios from 'axios';
import {UsersPropsType} from "./UsersContainer";
import userPhoto from "../../assets/images/user.png"
import {Users} from "./Users";






export class UsersAPIComponent extends Component<UsersPropsType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}$count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })

    }

    // showMore = () => this.props.showMore()


    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}$count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);})
    }

    render() {
        // const filteredUser = this.props.usersPage.users.filter((u, i) => i < this.props.usersPage.count)





    return <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  unfollow={this.props.unfollow}
                  follow={this.props.unfollow}
                  onPageChanged={this.onPageChanged}
                  usersPage={this.props.usersPage}
    />
}
}



