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
            avatar: 'https://media.cnn.com/api/v1/images/stellar/prod/220804093610-01-trent-alexander-arnold-file.jpg?c=original',
        },
        {name: "Virgil", id: 1, avatar: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p97032.png'},
        {name: "Darwin", id: 3, avatar: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p447203.png'},
        {name: "Roberto", id: 4, avatar: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p92217.png'},
        {name: "Thiago", id: 5, avatar: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p61558.png' }
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
            if (action.newMessageText.trim() !== '') {
                let newMessage: MessagesType = {
                    id: state.messages.length + 1,
                    message: action.newMessageText
                }
                return {
                    ...state,
                    newMessageText: "",
                    messages: [...state.messages, newMessage]
                }}
            else return state
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