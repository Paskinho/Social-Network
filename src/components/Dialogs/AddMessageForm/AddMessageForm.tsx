import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextArea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validators";
import s from './AddMessageForm.module.css';
import styles from '../../common/styles/Button.module.css'

export type AddMessageFormType = {
    newMessageText: string
}

const AddMessageForm: FC<InjectedFormProps<AddMessageFormType>> = (props) => {

    const maxLength50 = maxLengthCreator(50)
    const minLength5 = minLengthCreator(5)

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea}
                       name = {'newMessageText'}
                       placeholder={"Enter you message..."}
                       >
                    {/*validate={[required,maxLength50, minLength5]}был в форме, но из-за него постоянный rerender*/}
                </Field>
            </div>
            <div>
                <button className={styles.button}>Add</button>
                <button className={styles.button} onClick={props.reset}>Reset</button>
            </div>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm<AddMessageFormType> ({
    form: 'dialogAddMessage'
})(AddMessageForm)