import React from 'react';
import s from './Myposts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, dialogsPageType, myPostsPageType} from "../../../Redux/state";
import {text} from "stream/consumers";

const addPostActionCreation = ()=> {
    return {
        type: "ADD-POST"
    }
}

const onPostActionUpdate = () => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newPostText: text
    }
}


type MessageType = {
    // message: string
    // posts:Array<PostDataType>
    // addPostCallback: (postText:string) => void
    // onPostChangeCallBack: (newText: string) => void
    dispatch: (action: any) => void
    myPostPage: myPostsPageType
    // dialogsPage: dialogsPageType
}

export const MyPosts = (props: MessageType) => {



    const postMessageRef = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        //
        // props.addPostCallback(props.message)
        let text = postMessageRef.current?.value
        if (text) props.dispatch({addPostActionCreation})
        if (postMessageRef.current) postMessageRef.current.value = ''
    }

    const onPostChangeCallBack = () => {
const text = postMessageRef.current?.value;
      text ? props.dispatch({onPostActionUpdate}) : props.dispatch('');
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            {/*<hr>*/}
            {/*{props.posts.map(p=> <div><b>{p.postText}</b></div>)}*/}
            {/*    /!*key={p.i} добавить в дивку*!/*/}
            {/*</hr>*/}
            <div>
                <textarea onChange={onPostChangeCallBack} value={props.myPostPage.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                New posts
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    <Post message='Im best player in the world' like='5'/>
                    <Post message='Реакт/Редакс знать будешь круууто' like='10'/>


                </div>
            </div>
        </div>
    )
}