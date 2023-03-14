import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextArea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";


export type AddMessageFormType = {
    newMessageText: string
    addMessage: () => void
    onMessage: () => void
}

export const AddMessageForm: FC<InjectedFormProps<AddMessageFormType>> = (props: any) => {

    const maxLength50 = maxLengthCreator(50)

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea}
                       validate={[required, maxLength50]}
                       name = 'newMessageText'
                       placeholder="Enter you message..."/>
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