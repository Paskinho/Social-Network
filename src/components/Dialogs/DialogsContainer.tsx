import React, {ComponentType} from "react";
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {addMessageCreator, InitialStateType} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {getDialogsPage} from "../../redux/dialogs-selectors";


type MapStatePropsType = {
    dialogsState: InitialStateType
    isAuth: boolean
}

type MapDispatchPropsType = {
    addMessage: (newMessageText: string) => void
    // onMessage: (message: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {

    return {
        dialogsState: getDialogsPage(state),
        // state.dialogsPage раньше было так
        isAuth: state.authReducer.isAuth
    }
}

// let mapStateToProps = useMemo((state: AppStateType) => {
//     return {
//         dialogsState: state.dialogsReducer, // state.dialogsPage
//         isAuth: state.authReducer.isAuth
//     }
// }, [])


const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: (newMessageText) => {
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

export default compose<ComponentType>
(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect
)(Dialogs);