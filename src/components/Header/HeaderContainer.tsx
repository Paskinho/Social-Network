import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {logoutTC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<HeaderContainerType> {

    render() {
        return <Header {...this.props}/>
    }
}

type MapStateToPropsType = {
    isAuth: boolean,
    id: number | null
    login: string | null
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.authReducer.isAuth,
        id: state.authReducer.userId,
        login: state.authReducer.login
    }
}

 type MapDispatchToPropsType = typeof mapDispatchToProps

const mapDispatchToProps = {
    logoutTC
}

export type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType


// @ts-ignore
export default connect(mapStateToProps, {logoutTC})(HeaderContainer);
