import React from 'react';
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../redux/redux-store";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {PostDataType, RootStateType} from "../../../redux/store";
import {addMessageCreator, onMessagePostCreator} from "../../../redux/dialogs-reducer";


type MapStatePropsType = {
    posts: PostDataType[]
    postText: string
}


type MessageType = {
    store: StoreType
}

const mapStateToProps = (state: RootStateType) : MapStatePropsType => {
    return {
        posts: state.profilePage.postData,
        postText: state.profilePage.newPostText,

    }
}

const mapDispatchToProps = (dispatch: any) => {
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