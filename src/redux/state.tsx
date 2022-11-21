


export type SubscribeType = (observer: RootStateType)=>void

export type myPostsPageType = {
    postData:Array<PostDataType>
    newPostText: string


}

export type dialogsPageType ={
    users: Array<UsersType>
    messages: Array<MessagesType>

}

export type PostDataType ={
     // id: number
    postText: string
    like: number

}

type UsersType = {
    name: string
    id: number

}

type MessagesType = {
    message: string
}

// type SidebarType={}



 export type RootStateType = {
    dialogsPage: dialogsPageType
    myPostsPage: myPostsPageType
     // sidebar: SidebarType


}








export type StoreType = {
    _state: RootStateType
    onChange: () => void
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: AddPostActionType | UpdateNewTextActionType)=>void
}

type AddPostActionType = {
    type: "ADD-POST"
    postText: string
}
type UpdateNewTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newPostText: string
}

type UpdateNewMessageBody = {
    type: "UPDATE_NEW-MESSAGE_BODY"
}

export type ActionsTypes = AddPostActionType | UpdateNewTextActionType | UpdateNewMessageBody

const ADD_POST = "ADD-POST"

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW-MESSAGE_BODY"

export const addPostActionCreation = (postText: string): AddPostActionType=> ({
    type: ADD_POST, postText: postText
})

export const onPostActionCreator = (newPostText:string):UpdateNewTextActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: newPostText
})



export const store: StoreType ={
    _state: {

        dialogsPage: {

            users: [
                {name: "Trent", id: 0},
                {name: "Virgil", id: 1},
                {name: "Mohamed", id: 2},
                {name: "Darwin", id: 3},
                {name: "Roberto", id: 4},
                {name: "Thiago", id: 5}
            ],
            messages: [
                {message: "Hi"},
                {message: "How are you IT-Kamasutra"},
                {message: "YO"}

            ],

            newMessageBody = ""
        },

        myPostsPage: {
            postData: [
                {postText: "Hello, how are you?", like: 5},
                {postText: "This is my first post)", like: 10},
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
    addPost (postText:string) {
        const newPost: PostDataType  = {
            // id:5,
            postText: this._state.myPostsPage.newPostText,  //postText
            like: 0
        };

        this._state.myPostsPage.postData.push(newPost)
        this._state.myPostsPage.newPostText = ""
        this.onChange()
        // this._onChange()
    },
    updateNewPostText (newText:string) {
        this._state.myPostsPage.newPostText = newText
        this.onChange()
        // this._onChange()
    },
    subscribe (observer) {
        this.onChange=observer
    },

    dispatch (action) {
    if (action.type === ADD_POST){
        const newPost: PostDataType  = {
            // id: new Date() getTime(),
            postText: action.postText,  //postText
            like: 0
        };

        this._state.myPostsPage.postData.push(newPost)
        this._state.myPostsPage.newPostText = ""
        this.onChange()
        // this._onChange()
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        this._state.myPostsPage.newPostText = action.newPostText;
        this.onChange()
    }
    else if (action.type === UPDATE_NEW_MESSAGE_TEXT_BODY)  {
        this._state.dialogsPage.newMessageBody
    }



    }

}




//store