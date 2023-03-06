import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import { LoginFormType } from '../../api/api';



const LoginForm: FC<InjectedFormProps<LoginFormType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name={'login'} placeholder={'Login'}/>
            </div>
            <div>
                <Field component={'input'} name={'password'} placeholder={'Password'}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}

const LoginReduxForm = reduxForm ({
     form: 'login'
})(LoginForm)

export const Login = () => {
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm/>
    </div>
}