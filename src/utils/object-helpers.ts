import React from "react";
import {AppStateType} from "../redux/redux-store";

let updateObjectInArray = (state: AppStateType) => {
    state.users.map((u: any) => {
        if (u.id === action.payload) {
            return {...u, followed: true}
        }
        return u;
    })
}