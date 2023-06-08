import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginTC} from "./auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Navigate} from "react-router-dom";
import {MapStateToProps} from "react-redux/es/exports";
import btn from '../common/styles/Button.module.css';
import s from '../Login/Login.module.css'

export type LoginFormType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: boolean
}

const LoginForm: FC<InjectedFormProps<LoginFormType>> = (props) => {
    console.log('FORM RERENDERED')

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.input}>
                <Field
                    component={Input}
                       validate={[required]}
                       name={'email'}
                       placeholder={'Email'}/>
            </div>
            <div className={s.input}>
                <Field component={Input}
                       validate={[required]}
                       name={'password'}
                       type={'password'}
                       placeholder={'password'}
                />
            </div>
            <div>
                <Field component={'input'}
                       name={'rememberMe'}
                       type={'checkbox'}/> Remember me
            </div>
            <div>
                {props.error && <div className={s.formSummaryError}>
                    {props.error}
                </div>}
                <button className={btn.button}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormType>({
    form: 'login'
})(LoginForm)

const Login = (props: any) => {

    const onSubmit = (formData: LoginFormType) => {
        props.loginTC(formData)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.authReducer.isAuth
})

const action = {
    loginTC: loginTC
}

type MapDispatchType = typeof action
//
//
type MapStateToPropsType = ReturnType<typeof mapStateToProps>

export default connect(mapStateToProps, action)(Login)