import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";


export type addPostCreatorType = ReturnType<typeof addPostCreator>

export type updateNewPostTextCreatorType = ReturnType<typeof updateNewPostTextCreator>

export type setUserProfileType = ReturnType<typeof setUserProfileCreator>

export type setStatusCreatorType = ReturnType<typeof setStatusCreator>

export type deletePostCreatorType = ReturnType<typeof deletePostCreator>

export type ProfileActionsType =
    addPostCreatorType
    | updateNewPostTextCreatorType
    | setUserProfileType
    | setStatusCreatorType
| deletePostCreatorType


export type PostDataType = {
    id: number
    like: number
    title: string
}
export type profilePageType = {
    postData: Array<PostDataType>
    newPostText: string
}

type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type ServerProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

const initialState = {
    postData: [
        {title: "Hello, how are you?", like: 5, id: 1},
        {title: "This is my first post)", like: 10, id: 2},
    ],
    newPostText: "New message",
    profile: '',
    status: ''
};

export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType) => {

    switch (action.type) {
        case "ADD_POST": {
            let newPost: PostDataType = {
                id: state.postData.length + 1,
                title: action.newPostText,
                like: 0,
            }
            return {
                ...state,
                newPostText: "",
                postData: [...state.postData, newPost]
            }

        }
        case "UPDATE_NEW_POST_TEXT": {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case "SET_USER_PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'SET_STATUS' : {
            return {
                ...state,
                status: action.status
            }
        }

        case 'DELETE-POST' : {
            return {
                ...state,
                postData: state.postData.filter(p => p.id !== action.id)
            }
        }

        default:
            return state
    }

}


export const addPostCreator = (newPostText: string) => {
    return {
        type: "ADD_POST", newPostText
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

export const setStatusCreator = (status: string) => {
    return {
        type: "SET_STATUS",
        status: status
    } as const

}

export const deletePostCreator = (id: number) => {
    return {
        type: "DELETE-POST", id
    } as const
}


export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
        dispatch(setUserProfileCreator(response.data))
    })
}

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
        dispatch(setStatusCreator(response.data))
    })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setStatusCreator(status))
        }
    })
}