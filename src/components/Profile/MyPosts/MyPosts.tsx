import React from 'react';
import s from './Myposts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
    <div>
        My posts
        <div>
            <textarea></textarea>
                        <button>Add post</button>
        </div>
    <div>
        New posts
    </div>
    <div className={s.posts}>
        <div className={s.item}>
            <Post message='Hello, how are you?' like='5' />
            <Post message='This is my first post)?' like='10'/>


    </div>
</div>
    </div>
)
}

export default MyPosts