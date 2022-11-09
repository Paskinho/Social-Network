import React from "react";

export type State = {
    dialogsPage: dialogsPage
    mypostsPage: mypostsPage
}


export type dialogPagePropsType ={
    users: Array<users>
    messages: Array<messages>
}

export let state = {

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

    mypostsPage: {
        postData: [
        {postText: "Hello, how are you?", like: 5},
        {postText: "This is my first post)", like: 10},
    ]
}

}