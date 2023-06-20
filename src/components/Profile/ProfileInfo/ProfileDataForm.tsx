import {ServerProfileType} from "../../../redux/profile-reducer";
import React from "react";
import s from "./ProfileInfo.module.css";
import {createField, Input} from "../../common/FormsControls/FormsControls";

type ProfileDataFormPropsType = {
    profile: ServerProfileType;
    isOwner: boolean;
    goToEditMode: () => void
}

export  const ProfileDataForm: React.FC<ProfileDataFormPropsType> = (props) => {
    return <form>
        {props.isOwner && <div><button onClick={props.goToEditMode}>Edit</button> </div>}
        <div className={s.status}>
            <b>Full Name</b>: {createField('FullName', 'fullName', [], Input)}
        </div>
        <div className={s.status}>
            <b>Looking for a job</b>: {props.profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {props.profile.lookingForAJob &&
            <div className={s.status}>
                <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
            </div>
        }
        <div className={s.status}>
            <b>About me</b>: {props.profile.aboutMe}
        </div>
        {/*<div>*/}
        {/*    <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {*/}
        {/*    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>*/}
        {/*})}*/}
        {/*</div>*/}
    </form>
}