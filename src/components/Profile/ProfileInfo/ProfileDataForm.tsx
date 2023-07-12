import {ServerProfileType} from "../../../redux/profile-reducer";
import React, {FC} from "react";
import s from "./ProfileInfo.module.css";
import {createField, Input, TextArea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import btn from "../../common/styles/Button.module.css";

type ProfileDataFormPropsType = {
    profile: ServerProfileType;
    isOwner: boolean;
    // goToEditMode: () => void
    // onSubmit: () => void
}

const ProfileDataForm: FC<ProfileDataFormPropsType> = (props) => {
    //нужен сабмит формы onSubmit={props.handleSubmit} и типа InjectedProps, но с ними error
    return <form>
        <div><button onClick={()=> {}}>save</button> </div>
        {/*{props.error && <div className={s.formSummaryError}>*/}
        {/*    {props.error}*/}
        {/*</div>}*/}
        <button className={btn.button}>Login</button>
        <div className={s.status}>
            <b>Full Name</b>: {createField('FullName', 'fullName', [], Input)}
        </div>
        <div className={s.status}>
            <b>Looking for a job</b>: {createField('', 'Looking for a job', [], Input, {type: 'checkbox'})}

        </div>
            <div className={s.status}>
                <b>My professional skills</b>: {createField('My professional skills', 'lookingForAJobDescription', [], TextArea)}
            </div>

        <div className={s.status}>
            <b>About me</b>: {createField('About me', 'aboutMe', [], TextArea)}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
            return <div key={key}>
                <b>{key}: {createField(key,'contacts.' + key, [], Input)}</b>
            </div>
        })}
        </div>
    </form>
}

export const ProfileDataFormReduxForm = reduxForm<ServerProfileType,ProfileDataFormPropsType>({form: 'edit-profile'})(ProfileDataForm);