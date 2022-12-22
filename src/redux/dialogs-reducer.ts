import {dialogsPageType, MessagesType} from "./store";


type DialogsActionsType = onMessagePostCreatorType | addMessageCreatorType




export type onMessagePostCreatorType = ReturnType<typeof onMessagePostCreator>
export const onMessagePostCreator = (newMessage: string) => {
    return {
        type: "UPDATE_NEW_MESSAGE_TEXT",
        newMessage: newMessage
    } as const
}

export type addMessageCreatorType = ReturnType<typeof addMessageCreator>
export const addMessageCreator = () => {
    return {type: 'ADD_MESSAGE'} as const
}


const initialState = {

        dialogsPage: {

            users: [
                {name: "Trent",  id: 0 },
                {name: "Virgil",  id: 1 },
                {name: "Mohamed",  id: 2},
                {name: "Darwin", id: 3},
                {name: "Roberto", id: 4},
                {name: "Thiago", id: 5}
            ],
            messages: [
                {message: "Hi", id: 1},
                {message: "How are you IT-Kamasutra", id: 2},
                {message: "YO", id: 3}

            ] as Array<MessagesType>, // рекомендуемая типизация
            newMessageText: "",
        },

        // sidebar: {},
        // }
    }

export type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType=initialState , action: DialogsActionsType) : InitialStateType => {

    switch (action.type) {
        case "ADD_MESSAGE":{
            let newMessage: MessagesType = {
                id: state.dialogsPage.messages.length + 1,
                message: state.dialogsPage.newMessageText
            }
            return {
                ...state,
                newMessageText : "",
                messages: [...state.dialogsPage.messages, newMessage]
            };

        }
        case "UPDATE_NEW_MESSAGE_TEXT": {
            return {
                ...state,
                newMessageText : action.newMessage

        }
        }

        default: return state

}}