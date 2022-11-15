

let rerenderEntireTree = (state: RootStateType)=> {
    console.log("state changed")
}

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

export const state: RootStateType = {

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

        ]
    },

    myPostsPage: {
        postData: [
        {postText: "Hello, how are you?", like: 5},
        {postText: "This is my first post)", like: 10},
    ],
        newPostText: "it-kamasutra",

},
// sidebar:{}
}

export const addPost =(postText:string) => {
     const newPost: PostDataType  = {
         // id:5,
      postText: postText,
         like: 0
     };

     state.myPostsPage.postData.push(newPost)
    rerenderEntireTree(state)
}

export const updateNewPostText =(newText:string) => {
    state.myPostsPage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer: SubscribeType) => {
rerenderEntireTree=observer
}

//store