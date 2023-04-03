import React from "react";
import {ProfileType} from "../ProfileContainer";

type ProfileStatusType = {
    status: string
    updateStatus: () => void

}

export const ProfileStatusWithHooks = (props: ProfileType) => {

    return (
        <div>
            {
                <div>
                    <span> </span>
                </div>
            }
            {
                false &&
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


