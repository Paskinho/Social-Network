import React, {useRef} from "react";
import {Dialogs} from "./Dialogs";
import {StoreType} from "../../redux/redux-store";
import {addMessageCreator, onMessagePostCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";




type DialogsPropsType = {
    store: StoreType
}



const mapStateToProps = (state: RootStateType) => {
    return {
        dialogsState: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: any) => {
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



const DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (Dialogs);

export default DialogsContainer;