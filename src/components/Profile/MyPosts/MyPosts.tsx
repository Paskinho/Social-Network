import React from 'react';
import s from './Myposts.module.css'
import {Post} from "./Post/Post";
import {PostDataType} from "../../../Redux/state";



type MessageType = {
    message: string
    posts:Array<PostDataType>
    addPostCallback: (postText:string) => void
    onPostChangeCallBack: (newText: string) => void
}

export const MyPosts = (props: MessageType) => {



    const postMessageRef = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {

        props.addPostCallback(props.message)
    }

    const onPostChangeCallBack = () => {
const text = postMessageRef.current?.value;
      props.updateNewPostText();
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            {props.posts}
            <hr>
            {props.posts.map(p=> <div><b>{p.postText}</b></div>)}
                {/*key={p.i} добавить в дивку*/}
            </hr>
            <div>
                <textarea onChange={(e)=> {
                    props.onPostChangeCallBack(e.currentTarget.value);
                }} value={props.message}/>
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

