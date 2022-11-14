import React from "react";
import {rerenderEntireTree} from "../render";

type myPostsPageType = {
    postData:Array<PostDataType>
}

type dialogsPageType ={
    users: Array<UsersType>
    messages: Array<MessagesType>
    newPostText: string
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

type SidebarType={}



 export type RootStateType = {
    dialogsPage: dialogsPageType
    myPostsPage: myPostsPageType
     sidebar: SidebarType


}

export const state: RootStateType = {

    dialogsPage: {
        newPostText: "it-kamasutra",
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

},
sidebar:{}
}

export const addPost =(postText:string) => {
     const newPost: PostDataType  = {
         // id:5,
      postText: state.myPostsPage.newPostText,
         like: 0
     };

     state.myPostsPage.postData.push(newPost)
    rerenderEntireTree(state)
}

export const updateNewPostText =(newText:string) => {
    state.myPostsPage.newPostText = newText
    rerenderEntireTree(state)
}