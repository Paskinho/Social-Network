import React from 'react';
import s from './Myposts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    let myPostsData = [
        {id: 1, like: "5", message: "Hello, how are you?"},
        {id: 2, like: "10", message: "This is my first post)?"},

    ]

    let postsElements = myPostsData.map (p=> <Post message={p.message} like={p.like})

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
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

