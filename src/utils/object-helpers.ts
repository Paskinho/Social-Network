import React from "react";
import {AppStateType} from "../redux/redux-store";

export const updateObjectInArray = (items: [], itemId: number, objPropName: string, newObjProps: any) => {
    items.map((u: any) => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}