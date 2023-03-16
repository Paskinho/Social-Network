import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";


export type LoginFormType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: boolean
}

const LoginForm: FC<InjectedFormProps<LoginFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}
                       validate={[required]}
                       name={'login'}
                       placeholder={'Login'}/>
            </div>
            <div>
                <Field component={Input}
                       validate={[required]}
                       name={'password'}
                       placeholder={'Password'}/>
            </div>
            <div>
                <Field component={'input'}
                       name={'rememberMe'}
                       type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormType> ({
     form: 'login'
})(LoginForm)

export const Login = () => {
    const onSubmit = (formData:LoginFormType) => {
        console.log(formData)
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}