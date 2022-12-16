import {ActionsTypes, dialogsPageType, MessagesType} from "./store";

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


const initialState: any = {

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
            newMessageText: "",
        },

        // sidebar: {},
        // }
    }

export type InitialStateType = typeof initialState

export const dialogsReducer = (state: dialogsPageType=initialState , action: ActionsTypes) : dialogsPageType => {
    const stateCopy = {
        ...state,
        messages: [...state.messages]
    };
    switch (action.type) {
        case "ADD_MESSAGE":{
            let newMessage: MessagesType = {
                id: state.messages.length + 1,
                message: state.newMessageText
            }

            stateCopy.messages.push(newMessage)
            stateCopy.newMessageText = "";
            return stateCopy;
        }
        case "UPDATE_NEW_MESSAGE_TEXT": {

            stateCopy.newMessageText = action.newMessage
            return stateCopy
        }

        default: return state
    }

}