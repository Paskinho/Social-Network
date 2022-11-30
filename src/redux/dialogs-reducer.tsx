import {ActionsTypes, dialogsPageType, MessagesType} from "./store";

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

let initialState: any = {
    _state: {

        dialogsPage: {

            users: [
                {
                    name: "Trent",
                    id: 0
                },
                {
                    name: "Virgil",
                    id: 1
                },
                {
                    name: "Mohamed",
                    id: 2
                },
                {
                    name: "Darwin",
                    id: 3
                },
                {
                    name: "Roberto",
                    id: 4
                },
                {
                    name: "Thiago",
                    id: 5
                }
            ],
            messages: [
                {message: "Hi", id: 1},
                {message: "How are you IT-Kamasutra", id: 2},
                {message: "YO", id: 3}

            ],
            newMessageText: ""
        },

        // sidebar: {},
        // }


export const dialogsReducer = (state: dialogsPageType = initialState, action: ActionsTypes) => {

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
},