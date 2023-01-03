

export type addPostCreatorType = ReturnType<typeof addPostCreator>

export type updateNewPostTextCreatorType = ReturnType<typeof updateNewPostTextCreator>

export type setUserProfileType = ReturnType<typeof setUserProfileCreator>

export type ProfileActionsType = addPostCreatorType | updateNewPostTextCreatorType | setUserProfileType


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
    profile: null
};

export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType) => {

    switch (action.type) {
        case "ADD_POST": {
            let newPost: PostDataType = {
                id: state.postData.length + 1,
                title: state.newPostText,
                like: 0,
            }
            return {
                ...state,
                newPostText : "",
                postData: [...state.postData, newPost]
            }


        }
        case "UPDATE_NEW_POST_TEXT": {
           return  {...state,
               newPostText : action.newText
           }
        }
        case "SET_USER_PROFILE": {
            return {...state,
                profile: action.profile
            }
        }


        default:
            return state
    }

}


export const addPostCreator = () => {
    return {
        type: "ADD_POST"
    } as const
}


export const updateNewPostTextCreator = (newText: string) => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        newText: newText
    } as const
}

export const setUserProfileCreator = (profile: string) => {

    return {
        type: "SET_USER_PROFILE",
        profile: profile
    } as const

}