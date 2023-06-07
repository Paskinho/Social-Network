import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Navigate} from "react-router-dom";
import {Preloader} from "../components/common/Preloader/Preloader";


export const withSuspense = (Component: any) => { // УТОЧНИТЬ ТИП

    return (props: any) => {
       <React.Suspense fallback={<Preloader/>}>
            <Component/>
        </React.Suspense>
    }
}