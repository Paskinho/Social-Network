import React, {useState} from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../ProfileContainer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {savePhoto, ServerProfileType} from "../../../redux/profile-reducer";
import {ProfileDataFormReduxForm} from "./ProfileDataForm";
import {LoginFormType} from "../../Login/Login";


export const ProfileInfo: React.FC<ProfileType> = (props) => {

    const [editMode, setEditMode] = useState(false)

    if (props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: any) => { // УТОЧНИТЬ ТИП
        if (e.target.files.length) {
            savePhoto(e.target.fules[0])
        }
    }

    const onSubmit = (formData: LoginFormType) => {
        props.saveProfile(formData)
        setEditMode(false)
    }



    return (
        <div>
            <div>

                <img className={s.img}
                     src="https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2021-06/placeholder.jpg?itok=nhe1dpvk"/>

            </div>
            <div>
                {/*<img src={props.profile.photos.large || userPhoto} className={s.img}/>*/}
                {props.isOwner && <input className={s.fileButton} type={'file'} onChange={onMainPhotoSelected}/>}
                {editMode ? <ProfileDataFormReduxForm profile={props.profile} isOwner={props.isOwner}
                    // onSubmit={onSubmit}
                    />
                    :
                    <ProfileData profile={props.profile}
                                 isOwner={props.isOwner}
                                 goToEditMode={() => {
                                     return setEditMode(true)
                                 }}
                    />}
                <ProfileStatusWithHooks status={props.status} updateStatus={() => {
                }}/>
            </div>
            <div>

            </div>
        </div>
    )
}

// ОТДЕЛЬНАЯ КОМПОНЕНТА ДЛЯ данных профиля

export type ProfileDataPropsType = {
    profile: ServerProfileType;
    isOwner: boolean;
    goToEditMode: () => void
};

const ProfileData: React.FC<ProfileDataPropsType> = (props) => {
    return <div>
        {props.isOwner && <div>
            <button onClick={props.goToEditMode}>Edit</button>
        </div>}
        <div className={s.status}>
            <b>Full Name</b>: {props.profile.fullName}
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
    </div>
}


const Contact = ({contactTitle, contactValue}: any) => {
    return <div>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}