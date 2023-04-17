import React from "react";
import {addPostCreator, profileReducer} from "./profile-reducer";

let state = {
    postData: [
        {title: "Hello, how are you?", like: 5, id: 1},
        {title: "This is my first post)", like: 10, id: 2},
    ],
    newPostText: "New message",
    profile: '',
    status: ''
}

it('length postFata should be increased',  ()=> {
// 1. test data
    let action = addPostCreator('it-kamasutra')


    //2. action
    let newState = profileReducer(state, action);

    //3.expectation

    expect(newState.postData.length).toBe(3);
    expect(newState.newPostText).toBe('it-kamasutra');
});

