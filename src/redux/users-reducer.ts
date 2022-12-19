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


    users: [
        {id: 1, fullName: 'Steven', status: 'Im a former Liverpool player and captain', location: {city: 'Liverpool', country: 'England'}},
        {id: 2, fullName: 'Kenny', status: 'Im a former Liverpool player and best of all time maybe', location: {city: 'Glasgow', country: 'Scotland'}},
        {id: 3, fullName: 'Luis', status: 'Im a former Liverpool player and topscorer', location: {city: 'Montevideo', country: 'Uruguay'}}
    ]
}

export type InitialStateType = typeof initialState

export const usersReducer = (state: dialogsPageType=initialState , action: ActionsTypes) : dialogsPageType => {

    switch (action.type) {


        default: return state
    }

}