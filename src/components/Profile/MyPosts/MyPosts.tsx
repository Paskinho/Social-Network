import React from 'react';
import s from './Myposts.module.css'
import {Post} from "./Post/Post";
type MessageType = {
    message: string
    addPostCallback: (postText:string) => void
}

export const MyPosts = (props: MessageType) => {



    const postMessageRef = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {

        props.addPostCallback(postMessageRef.current ? postMessageRef.current.value: '----')
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={postMessageRef}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                New posts
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    <Post message='Hello, how are you?' like='5'/>
                    <Post message='This is my first post)' like='10'/>


                </div>
            </div>
        </div>
    )
}

