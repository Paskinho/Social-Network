import React from 'react';
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../redux/redux-store";
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

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onPost: (post: string) => {
            dispatch(updateNewPostTextCreator(post))
        },
        addNewPost: (newText: string) => {
            dispatch(addPostCreator(newText))
        },
        dispatch: dispatch
    }
}
//уточнить пропсы


export const MyPostsContainer = connect (mapStateToProps,mapDispatchToProps )(MyPosts);