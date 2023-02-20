import React from 'react';
import {Redirect} from "@reach/router";
import {connect} from "react-redux";

let mapStateToPropsRedirect = (state: any) => {
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