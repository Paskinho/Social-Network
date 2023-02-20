import React from 'react';
import {Redirect} from "@reach/router";
// import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

const mapStateToPropsRedirect = (state: AppStateType) => {
    isAuth: state.auth.isAuth
};


export const withAuthRedirect = (Component: any) => {

    const RedirectComponent = (props: any) => {
        if (!props.isAuth) return <Redirect to='./login'/>
        return <Component {...props}/>

    }


    let ConnectAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)

    return ConnectAuthRedirectComponent
}