import React, {useState} from "react";
import {ProfileType} from "../ProfileContainer";

type ProfileStatusType = {
    status: string
    updateStatus: () => void

}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    let [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }

    return (
        <div>
            { !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status}"------"</span>
                </div>
            }
            {
                editMode &&
                <div>
                    <input autoFocus={true}/>
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


