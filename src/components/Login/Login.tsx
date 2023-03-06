import React, {FC} from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form'
import { LoginFormType } from '../../api/api';



const LoginForm: FC<InjectedFormProps<LoginFormType>> = () => {
    return (
        <form>
            <div>
                <input placeholder={'Login'}/>
            </div>
            <div>
                <input placeholder={'Password'}/>
            </div>
            <div>
                <input type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}

const LoginReduxForm = reduxForm ({
     form: 'contact'
})(LoginForm)

export const Login = () => {
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm/>
    </div>
}