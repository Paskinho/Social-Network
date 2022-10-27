import React from "react";


export type State = {
    profilePage:Profilepage
    messagesPage:Messagespage
    sideBar:Sidebartype
}

//------------profilePage
export type Profilepage = {
    postData: Array<Postdata>
}

export type Postdata = {
    postText : string
    likesCount : number
}


//---------messagesPage

export type Messagespage = {
    users : Array<Users>
    messages : Array<Messages>
}


export type Users = {
    name: string
    id: number
}


export type Messages = {
    message : string
}

//------sideBar
export type Sidebartype = {
    user1 :string
    user2 :string
    user3 :string
}

export let state = {
    profilePage: {
        posts: [  //myPostsData
            {id: 1, like: "5", message: "Hello, how are you?"},
            {id: 2, like: "10", message: "This is my first post)?"},

        ],

    },
   dialogsPage: {
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you IT-Kamasutra"},
            {id: 3, message: "YO"},
            {id: 4, message: "YO"},
            {id: 5, message: "YO"},
            {id: 6, message: "YO"},
        ],
        dialogs: [
            {id: 1, name: "Trent"},
            {id: 2, name: "Virgil"},
            {id: 3, name: "Mohamed"},
            {id: 4, name: "Darwin"},
            {id: 5, name: "Roberto"},
            {id: 6, name: "Thiago"},
        ],
    },
    sidebar: {}
    }

