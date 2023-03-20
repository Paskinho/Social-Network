import React from "react";
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {addMessageCreator, InitialStateType} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStatePropsType = {
    dialogsState: InitialStateType

}

type MapDispatchPropsType = {
    addMessage: (newMessageText: string) => void
    // onMessage: (message: string) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsState: state.dialogsReducer, // state.dialogsPage
        // isAuth: state.authReducer.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch) : MapDispatchPropsType => {
    return {
        addMessage: (newMessageText: string)=> {
            dispatch(addMessageCreator(newMessageText))
        }
        // onMessage: (message:string)=> {
        //     dispatch(onMessagePostCreator(message))
        // }
    }
}
//уточнить пропсы

// let AuthRedirectComponent = withAuthRedirect(Dialogs)

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

//
// const DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (AuthRedirectComponent);

 export default compose<React.ComponentType>
(connect (mapStateToProps,mapDispatchToProps),
    withAuthRedirect)(Dialogs)
;