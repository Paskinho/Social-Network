import React, {useEffect, useState} from "react";
import {ProfileType} from "../ProfileContainer";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void

}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

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


    const onStatusChange = (e: any) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "------"}</span>
                </div>
            }
            {
                editMode &&
                <div>
                    <input onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={deActivateMode}
                           value={status}
                    />
                </div>
            }
        </div>
    )
}