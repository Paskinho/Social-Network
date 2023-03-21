type DialogsActionsType = onMessagePostCreatorType | addMessageCreatorType
export type MessagesType = {
    message: string
    id: number
}
export type DialogType = {
    name: string
    id: number
    avatar: string
}


export type onMessagePostCreatorType = ReturnType<typeof onMessagePostCreator>
export const onMessagePostCreator = (newMessageText: string) => {
    return {
        type: "UPDATE_NEW_MESSAGE_TEXT",
        newMessageText: newMessageText
    } as const
}

export type addMessageCreatorType = ReturnType<typeof addMessageCreator>
export const addMessageCreator = (newMessageText: string) => {
    return {type: 'ADD_MESSAGE', newMessageText} as const
}


const initialState = {
    users: [
        {
            name: "Trent",
            id: 0,
            avatar: 'https://www.thisisanfield.com/wp-content/uploads/P2022-10-09-Arsenal_Liverpool-6.jpg'
        },
        {name: "Virgil", id: 1},
        {name: "Mohamed", id: 2},
        {name: "Darwin", id: 3},
        {name: "Roberto", id: 4},
        {name: "Thiago", id: 5}
    ] as Array<DialogType>,
    newMessageText: "", // УБИРАЕМ?
    messages: [
        {message: "Hi", id: 1},
        {message: "How are you IT-Kamasutra", id: 2},
        {message: "YO", id: 3}

    ] as Array<MessagesType>, // рекомендуемая типизация

}

// sidebar: {},
// }


export type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionsType): InitialStateType => {

    switch (action.type) {
        case "ADD_MESSAGE": {
            let newMessage: MessagesType = {
                id: state.messages.length + 1,
                message: action.newMessageText
            }
            return {
                ...state,
                newMessageText: "",
                messages: [...state.messages, newMessage]
            };

        }
        case "UPDATE_NEW_MESSAGE_TEXT":
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        default:
            return state;

    }
}