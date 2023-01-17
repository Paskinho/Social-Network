import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        })
            .then((response) => {
            if (response.data.resultCode === 0) {
                this.props.setAuthUserData(response.data.data.login)
            }
        })}

    render () {
    return <Header {...this.props}/>
    }
}


const mapStateToProps = (state: any) => ({})

export default connect (mapStateToProps, {setAuthUserData}) (HeaderContainer);
