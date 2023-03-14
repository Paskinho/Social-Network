import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type AddMessageFormType = {
    newMessageText: string
    addMessage: () => void
    onMessage: () => void
}



export const AddMessageForm: FC<InjectedFormProps<AddMessageFormType>> = (props: any) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name = 'newMessageText' placeholder="Enter you message..."/>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm<AddMessageFormType> ({
    form: 'dialogAddMessage'
})(AddMessageForm)