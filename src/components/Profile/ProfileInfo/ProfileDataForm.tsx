import {ServerProfileType} from "../../../redux/profile-reducer";
import React from "react";
import s from "./ProfileInfo.module.css";
import {createField, Input, TextArea} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";

type ProfileDataFormPropsType = {
    profile: ServerProfileType;
    isOwner: boolean;
    goToEditMode: () => void
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormPropsType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><button onClick={()=> {}}>save</button> </div>
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
        {/*<div>*/}
        {/*    <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {*/}
        {/*    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>*/}
        {/*})}*/}
        {/*</div>*/}
    </form>
}

export const ProfileDataFormReduxForm = reduxForm<ServerProfileType,ProfileDataFormPropsType, InjectedFormProps>({form: 'edit profile'})(ProfileDataForm);