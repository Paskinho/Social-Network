import React from 'react';
import s from './Myposts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
    <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <textarea></textarea>
        </div>
        <div>
                        <button>Add post</button>
        </div>
    <div>
        New posts
    </div>
    <div className={s.posts}>
        <div className={s.item}>
            <Post message='Hello, how are you?' like='5' />
            <Post message='This is my first post)' like='10'/>


    </div>
</div>
    </div>
)
}

