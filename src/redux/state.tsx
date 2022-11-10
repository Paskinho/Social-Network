import React from "react";


 type myPostsPageType = {
    postData:Array<PostDataType>
}

type dialogsPageType ={
    users: Array<UsersType>
    messages: Array<MessagesType>
}

type PostDataType ={
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

type SidebarType={}



 type RootStateType = {
    dialogsPage: dialogsPageType
    myPostsPage: myPostsPageType
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
    ]
}

}

export const addPost =(postText:string) => {
     const newPost: PostDataType  = {
         // id:5,
      postText: postText,
         like: 0
     };

     state.myPostsPage.postData.push(newPost)
}