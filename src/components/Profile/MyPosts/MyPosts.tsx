import React, {ChangeEvent} from 'react';
import s from './Myposts.module.css'
import {Post} from "./Post/Post";

import {addMessageCreator, addPostCreator, onMessagePostCreator, updateNewPostTextCreator} from "../../../redux/store";
import {MyPostsType} from "./MyPostsContainer";

type PostDataType ={
    id: number
title: string
    like: number

}
type MessageType = {
    // message: string
    posts:Array<PostDataType>
    // addPostCallback: (postText:string) => void
    // onPostChangeCallBack: (newText: string) => void
    dispatch: (action: any) => void
    // profilePage: profilePageType
    postText: string
    // dialogsPage: dialogsPageType
    addNewPost:()=>void
    onPost: (post:string) => void
}

export const MyPosts: React.FC<MyPostsType> = ({posts, postText,addNewPost, onPost}) => {

const postsElements =
    posts.map(p=> <Post name={p.title}
                        like={p.like}
                        id={p.id}
                        key={p.id}

                        />)


    const addPost = () => {
        addNewPost()
    }

    const onPostChangeCallBack = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // В пути самурая let text = newPostElement.current.value
        // props.updateNewPostText(text)
        onPost(e.currentTarget.value)
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            {/*<hr>*/}
            {/*{props.posts.map(p=> <div><b>{p.postText}</b></div>)}*/}
            {/*    /!*key={p.i} добавить в дивку*!/*/}
            {/*</hr>*/}
            <div>
                <textarea onChange={onPostChangeCallBack} value={postText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

// const allPosts = posts.map(p => <Post name={p.title}
//                                       description={p.description}
//                                       likesCount={p.likesCount}
//                                       id={p.id}
//                                       key={p.id}
//                                       addLike={addLike}/>)
//
// const onSetPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
//     setPost(e.currentTarget.value)
// }
//
// const onAddNewPost = () => {
//     addNewPost()
// }
//
// return (
//     <div className={s.content}>
//         <div className={s.postsBlock}>
//             <h3>Posts</h3>
//             <div>
//                 <textarea cols={30} rows={5} value={newPostText} onChange={onSetPost}></textarea>
//                 <button onClick={onAddNewPost}>Add post</button>
//             </div>
//             <div>
//                 {allPosts}
//             </div>
//         </div>
//     </div>
// );
// };