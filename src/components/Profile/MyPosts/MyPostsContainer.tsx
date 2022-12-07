import React from 'react';
import s from './Myposts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, dialogsPageType, PostDataType, profilePageType} from "../../../Redux/store";
import {addMessageCreator, addPostCreator, onMessagePostCreator, updateNewPostTextCreator} from "../../../Redux/store";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../Redux/redux-store";



type MessageType = {
    store: StoreType
}

export const MyPostsContainer : React.FC<MessageType> = (props)=> {

const postsElements =
    props.posts.map(p=> <Post message={p.postText} like={p.like}/>)

    const postMessageRef = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        //
        // props.addPostCallback(props.message)
        let text = postMessageRef.current?.value
        if (text) props.dispatch({addPostCreator})
        if (postMessageRef.current) postMessageRef.current.value = ''
        // в пути самурая : props.addPost()
    }

    const onPostChangeCallBack = () => {
        // В пути самурая let text = newPostElement.current.value
        // props.updateNewPostText(text)
const text = postMessageRef.current?.value;
      text ? props.dispatch({updateNewPostTextCreator}) : props.dispatch('');
    }


    return (
       <MyPosts posts={} dispatch={} profilePage={}/>
    )
}