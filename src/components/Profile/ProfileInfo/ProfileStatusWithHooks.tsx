import React, {ChangeEvent, useEffect, useState} from "react";
import s from '../ProfileInfo/ProfileInfo.module.css'

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void

}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)


    useEffect(()=> {
        setStatus(props.status)
    }, [props.status])


    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }


    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }


    const handleKeyDown = (e: any) => {
        if (e.key === "Enter") {
            return onStatusChange(e.currentTarget.value)
        }
    };


    return (
        <div>
            {!editMode &&
                <div className={s.status}>
                    <span onDoubleClick={activateEditMode}>{status || "No status!"}</span>
                </div>
            }
            {
                editMode &&
                <div>
                    <input onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={deActivateMode}
                           value={status}
                           className={s.status}
                           onKeyDown={handleKeyDown}
                    />
                </div>
            }
        </div>
    )
}