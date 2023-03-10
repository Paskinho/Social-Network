import React from 'react';
import {MyPosts} from "./MyPosts";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {PostDataType} from "../../../redux/profile-reducer";
import {Dispatch} from "redux";

type MapStatePropsType = {
    posts: PostDataType[]
    postText: string
}

// type MessageType = {
//     store: StoreType
// }

const mapStateToProps = (state: AppStateType) : MapStatePropsType => {
    return {
        posts: state.profileReducer.postData, // уточнить
        postText: state.profileReducer.newPostText, // уточнить

    }
}


type MapDispatchPropsType = {
    onPost: (post: string) => void
    addNewPost: (newPostText: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType  => {
    return {
        onPost: (post: string) => {
            dispatch(updateNewPostTextCreator(post))
        },
        addNewPost: (newPostText: string) => {
            dispatch(addPostCreator(newPostText))
        },

    }
}


export type MyPostsType =  MapStatePropsType & MapDispatchPropsType

export const MyPostsContainer = connect (mapStateToProps,mapDispatchToProps )(MyPosts);