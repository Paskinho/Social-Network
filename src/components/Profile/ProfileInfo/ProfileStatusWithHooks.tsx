import React, {useState} from "react";
import {ProfileType} from "../ProfileContainer";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void

}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

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


// return (
//             <div>
//                 {
//                     <div>
//                         <span> </span>
//                         // <span {props.status || "Come on the reds"}</span>
//                     </div>
//                 }
// {
//     false &&
//     <div>
//         <input autoFocus={true}/>
//     </div>
// }
//             </div>
//         )
//     }


