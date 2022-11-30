import {ActionsTypes, dialogsPageType, profilePageType, PostDataType} from "./store";

let initialState = {
    postData: [
        {postText: "Hello, how are you?", like: 5, id: 1},
        {postText: "This is my first post)", like: 10, id: 2},
    ],
    newPostText: "New message",
};

export const profileReducer = (state: profilePageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD_POST": {
            let newPost: PostDataType = {
                id: new Date().getTime(),
                postText: action.newText,
                like: 10
            }
            state.postData.push(newPost)
            state.newPostText = ""
            return state
        }
        case "UPDATE_NEW_POST_TEXT": {
            state.newPostText = action.newText

            return state
        }
        default:
            return state
    }

}

export type addPostCreatorType = ReturnType<typeof addPostCreator>
export const addPostCreator = (newText: string) => {
    return {
        type: "ADD_POST",
        newText: newText
    } as const
}

export type updateNewPostTextCreatorType = ReturnType<typeof updateNewPostTextCreator>
export const updateNewPostTextCreator = (newText: string) => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        newText: newText
    } as const
}