import React, {useRef} from "react";
import {Dialogs} from "./Dialogs";
import {AppStateType, StoreType} from "../../redux/redux-store";
import {addMessageCreator, InitialStateType, onMessagePostCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";




type MapStatePropsType = {
    dialogsState: InitialStateType

}


type MapDispatchPropsType = {
    addMessage: () => void
    onMessage: (message: string) => void
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsState: state.dialogsReducer, // state.dialogsPage
        // isAuth: state.authReducer.isAuth
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


export default compose
(connect (mapStateToProps,mapDispatchToProps),
    (withAuthRedirect)(Dialogs))
;