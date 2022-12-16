import {ActionsTypes, dialogsPageType} from "./store";


export type PostDataType ={
    id: number
    like: number
    title: string
}
export type profilePageType = {
    postData:Array<PostDataType>
    newPostText: string
}



const initialState = {
    postData: [
        {title: "Hello, how are you?", like: 5, id: 1},
        {title: "This is my first post)", like: 10, id: 2},
    ],
    newPostText: "New message",
};

export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD_POST": {
            let newPost: PostDataType = {
                id: new Date().getTime(),
                title: `Post ${state.postData.length + 1}`,
                like: 0,
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText : ""
            }


        }
        case "UPDATE_NEW_POST_TEXT": {
           return  {...state,
               newPostText : action.newText
           }
        }
        default:
            return state
    }

}

// export type addPostCreatorType = ReturnType<typeof addPostCreator>
export const addPostCreator = (newText: string) => {
    return {
        type: "ADD_POST",
        newText: newText
    } as const
}

// export type updateNewPostTextCreatorType = ReturnType<typeof updateNewPostTextCreator>
export const updateNewPostTextCreator = (newText: string) => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        newText: newText
    } as const
}