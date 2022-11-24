import {ActionsTypes, dialogsPageType, MessagesType} from "./state";

export type onMessagePostCreatorType = ReturnType<typeof onMessagePostCreator>
export const onMessagePostCreator = (newMessage: string) => {
    return {
        type: "UPDATE_NEW_MESSAGE_TEXT",
        newMessage: newMessage
    } as const
}

export type addMessageCreatorType = ReturnType<typeof addMessageCreator>
export const addMessageCreator = (newMessage: string) => {
    return {
        type: "ADD_MESSAGE",
        newMessage: newMessage
    } as const
}

export const dialogsReducer = (state: dialogsPageType, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD_MESSAGE":{
            let newMessage: MessagesType = {
                id: new Date().getTime(),
                message: action.newMessage,
            }
            state.messages.push(newMessage)
            state.newMessageText = ""
            return state
        }
        case "UPDATE_NEW_MESSAGE_TEXT": {
            state.newMessageText = action.newMessage

        }
            return state
    }
}