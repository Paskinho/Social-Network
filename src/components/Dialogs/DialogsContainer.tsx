import React, {useRef} from "react";
import {Dialogs} from "./Dialogs";
import {AppStateType, StoreType} from "../../redux/redux-store";
import {addMessageCreator, InitialStateType, onMessagePostCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";




type MapStatePropsType = {
    dialogsState: InitialStateType
}


type MapDispatchPropsType = {
    addMessage: () => void
    onMessage: (message: string) => void
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsState: state.dialogsReducer // state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch) : MapDispatchPropsType => {
    return {
        addMessage: ()=> {
            dispatch(addMessageCreator())
        },
        onMessage: (message:string)=> {
            dispatch(onMessagePostCreator(message))
        }
    }
}
//уточнить пропсы

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType


const DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (Dialogs);

export default DialogsContainer;