import React from 'react';
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../redux/redux-store";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";



type MessageType = {
    store: StoreType
}

export const MyPostsContainer : React.FC<MessageType> = (props)=> {

    const MyPostsState = props.store.getState();

    const onPostChange = (post: string) => {
        props.store.dispatch(updateNewPostTextCreator(post))
    }

    const addNewPost = (newText:string) => {
        props.store.dispatch(addPostCreator(newText))
    }


    return (
        //<StoreContext></StoreContext>
       <MyPosts addNewPost={addNewPost} posts={MyPostsState.profileReducer.postData} postText={MyPostsState.dialogsReducer.newMessageText}
       dispatch={props.store.dispatch} onPost={onPostChange}/>
        //setPost={setPost} У меня onPost={onPostChange}
    )
}