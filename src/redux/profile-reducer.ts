import {profileAPI} from "../api/api";
import {Dispatch} from "redux";


export type addPostCreatorType = ReturnType<typeof addPostCreator>

export type updateNewPostTextCreatorType = ReturnType<typeof updateNewPostTextCreator>

export type setUserProfileType = ReturnType<typeof setUserProfileCreator>

export type setStatusCreatorType = ReturnType<typeof setStatusCreator>

export type deletePostCreatorType = ReturnType<typeof deletePostCreator>

export type savePhotoSuccessCreatorType = ReturnType<typeof savePhotoSuccessCreator>

export type ProfileActionsType =
    addPostCreatorType
    | updateNewPostTextCreatorType
    | setUserProfileType
    | setStatusCreatorType
| deletePostCreatorType
| savePhotoSuccessCreatorType


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
    } | null
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

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {

    switch (action.type) {
        case "profile/ADD_POST": {
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
        case "profile/UPDATE_NEW_POST_TEXT": {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case "profile/SET_USER_PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'profile/SET_STATUS' : {
            return {
                ...state,
                status: action.status
            }
        }
        case 'profile/DELETE-POST' : {
            return {
                ...state,
                postData: state.postData.filter(p => p.id !== action.id)
            }
        }
        // case "profile/SAVE_PHOTO_SUCCESS" :
        //     return {
        //         ...state,
        //         profile:{ ...state.postData, photos: action.payload.photos} as ProfileType} //РАЗОБРАТЬСЯ!!!!!
        default:
            return state
    }

}


export const addPostCreator = (newPostText: string) => {
    return {
        type: "profile/ADD_POST", newPostText
    } as const
}
export const updateNewPostTextCreator = (newText: string) => {
    return {
        type: "profile/UPDATE_NEW_POST_TEXT",
        newText: newText
    } as const
}
export const setUserProfileCreator = (profile: string) => {
    return {
        type: "profile/SET_USER_PROFILE",
        profile: profile
    } as const

}
export const setStatusCreator = (status: string) => {
    return {
        type: "profile/SET_STATUS",
        status: status
    } as const

}
export const deletePostCreator = (id: number) => {
    return {
        type: "profile/DELETE-POST", id
    } as const
}
export const savePhotoSuccessCreator = (file: string) => {
    return {
        type: "profile/SAVE_PHOTO_SUCCESS", file
    } as const
}



export const getUserProfile = (userId: string) => async (dispatch: Dispatch) => {
   let response = await profileAPI.getProfile(userId)
        dispatch(setUserProfileCreator(response.data))
}

// export const getUserProfile = (userId: string) => async (dispatch: Dispatch) => {
//     profileAPI.getProfile(userId).then((response)=>{
//         dispatch(setUserProfileCreator(response.data))
//     })
// }

// export const _getStatus = (userId: string) => async (dispatch: Dispatch) => {
//     let response = await profileAPI.getStatus(userId)
//         dispatch(setStatusCreator(response.data))
// }

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then((response)=> {
        dispatch(setStatusCreator(response.data))
    })

}


export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatusCreator(status))
        }
}

export const savePhoto = (file: any) => async (dispatch: Dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccessCreator(response.data.data.photos))
    }
}

export const saveProfile = (profile: any) => async (dispatch: Dispatch) => {
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccessCreator(response.data.data.photos))
    }
}