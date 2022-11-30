import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";


export type SubscribeType = (observer: RootStateType)=>void

export type profilePageType = {
    postData:Array<PostDataType>
    newPostText: string


}

export type dialogsPageType ={
    users: Array<UsersType>
    messages: Array<MessagesType>
    newMessageText: string

}

export type PostDataType ={
     id: number
    postText: string
    like: number

}

type UsersType = {
    name: string
    id: number

}

export type MessagesType = {
    message: string
    id: number
}

// type SidebarType={}



 export type RootStateType = {
    dialogsPage: dialogsPageType
     profilePage: profilePageType
     // sidebar: SidebarType


}








export type StoreType = {
    _state: RootStateType
    onChange: (state: RootStateType) => void
    // addPost: (postText: string) => void
    // updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: any)=>void

}

//action creator

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

export type onMessagePostCreatorType = ReturnType<typeof onMessagePostCreator>
export const onMessagePostCreator = (newMessage: string) => {
    return {
        type: "UPDATE_NEW_MESSAGE_TEXT",
        newMessage: newMessage
    } as const
}

export type addMessageCreatorType = ReturnType<typeof addMessageCreator>
export const addMessageCreator = (newMessage: string) => {
    return {
        type: "ADD_MESSAGE",
        newMessage: newMessage
    } as const
}

export type ActionsTypes = addPostCreatorType | updateNewPostTextCreatorType | onMessagePostCreatorType | addMessageCreatorType





export const store: StoreType ={
    _state: {

        dialogsPage: {

            users: [
                {
                    name: "Trent",
                    id: 0},
                {
                    name: "Virgil",
                    id: 1},
                {
                    name: "Mohamed",
                    id: 2},
                {
                    name: "Darwin",
                    id: 3},
                {
                    name: "Roberto",
                    id: 4},
                {
                    name: "Thiago",
                    id: 5}
            ],
            messages: [
                {message: "Hi", id:1},
                {message: "How are you IT-Kamasutra", id:2},
                {message: "YO", id:3}

            ],
            newMessageText: ""
        },

        // sidebar: {},

        profilePage: {
            postData: [
                {postText: "Hello, how are you?", like: 5, id: 1},
                {postText: "This is my first post)", like: 10, id: 2},
            ],
            newPostText: "New message",

        },
// sidebar:{}
    },
    getState(){
        return this._state
    },
    onChange (){
        console.log("state changed")
    },

    subscribe (observer) {
        this.onChange=observer
    },

    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
// this._state.sidebar = sidebarReducer(this._state,sidebar, action)
        // if (action.type === "ADD_POST") {
        //     let newPost: PostDataType = {
        //         id: new Date().getTime(),
        //         postText: action.newText,
        //         like: 10
        //     }
        //     this._state.myPostsPage.postData.push(newPost)
        //     this._state.myPostsPage.newPostText = ""
        //     this.onChange(this._state)
        // } else if (action.type === "UPDATE_NEW_POST_TEXT") {
        //     this._state.myPostsPage.newPostText = action.newText
        //     this.onChange(this._state)
        // } else if (action.type === "ADD_MESSAGE") {
        //     let newMessage: MessagesType = {
        //         id: new Date().getTime(),
        //         message: action.newMessage,
        //     }
        //     this._state.dialogsPage.messages.push(newMessage)
        //     this._state.dialogsPage.newMessageText = ""
        //     this.onChange(this._state)
        // } else if (action.type === "UPDATE_NEW_MESSAGE_TEXT") {
        //     this._state.dialogsPage.newMessageText = action.newMessage
            this.onChange(this._state)

    }

}




//store