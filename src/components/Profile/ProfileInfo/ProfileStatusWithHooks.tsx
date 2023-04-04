import React, {useState} from "react";
import {ProfileType} from "../ProfileContainer";

type ProfileStatusType = {
    status: string
    updateStatus: () => void

}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    useState()


    return (
        <div>
            {
                <div>
                    <span>"------"</span>
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


