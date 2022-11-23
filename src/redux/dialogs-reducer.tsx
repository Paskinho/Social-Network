import {MessagesType} from "./state";

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

const dialogsReducer = (state, action) => {
 if (action.type === "ADD_MESSAGE") {
    let newMessage: MessagesType = {
        id: new Date().getTime(),
        message: action.newMessage,
    }
state.messages.push(newMessage)
 state.newMessageText = ""

} else if (action.type === "UPDATE_NEW_MESSAGE_TEXT") {
    state.newMessageText = action.newMessage

}
    return state
}