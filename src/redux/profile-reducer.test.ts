import React from "react";
import {addPostCreator, profileReducer} from "./profile-reducer";


it('length postFata should be increased', function () {
// 1. test data
    let action = addPostCreator('it-kamasutra')

    let state = {
        postData: [
            {title: "Hello, how are you?", like: 5, id: 1},
            {title: "This is my first post)", like: 10, id: 2},
        ],
        newPostText: "New message",
        profile: '',
        status: ''
    }

    let newState = profileReducer(state, action)

    expect(newState.postData.length).toBe(3)
});

