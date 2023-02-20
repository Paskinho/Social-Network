import React, {ComponentType} from 'react';
import {Redirect} from "@reach/router";
// import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToPropsRedirect = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.authReducer.isAuth
    }
};


export function withAuthRedirect <T>(Component: ComponentType<T>)  {

    const RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props
        if (isAuth) return <Redirect to='./login'/>
        else return <Component {...restProps as T}/>

    }


    let ConnectAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)

    return ConnectAuthRedirectComponent
}