import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Navigate} from "react-router-dom";

// export function withAuthRedirect <T>(Component: ComponentType<T>)  {
//
//     const RedirectComponent = (props: MapStatePropsType) => {
//         let {isAuth, ...restProps} = props
//         if (isAuth) return <Redirect to='./login'/>
//         else return <Component {...restProps as T}/>
//
//     }
//
//
//     let ConnectAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
//
//     return ConnectAuthRedirectComponent
// }


export const withAuthRedirect = (Component: any) => { // УТОЧНИТЬ ТИП

    type MapStatePropsType = {
        isAuth: boolean
    }

    const mapStateToPropsRedirect = (state: AppStateType): MapStatePropsType => {
        return {
            isAuth: state.authReducer.isAuth
        }
    };

    const RedirectComponent = (props: MapStatePropsType) =>  {
        if (!props.isAuth) return <Navigate to={'/login'} />
        //Либо же Navigate from react-router-dom
        return <Component {...props} />
    }
    // return RedirectComponent
    return connect(mapStateToPropsRedirect)(RedirectComponent)


    //Maybe doing return right away
    // return connect(mapStateToPropsRedirect)(RedirectComponent)
}