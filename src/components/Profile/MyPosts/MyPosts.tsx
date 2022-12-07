import React from 'react';
import s from './Myposts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, dialogsPageType, PostDataType, profilePageType} from "../../../Redux/store";
import {addMessageCreator, addPostCreator, onMessagePostCreator, updateNewPostTextCreator} from "../../../Redux/store";


type MessageType = {
    // message: string
    posts:Array<PostDataType>
    // addPostCallback: (postText:string) => void
    // onPostChangeCallBack: (newText: string) => void
    dispatch: (action: any) => void
    profilePage: profilePageType
    // dialogsPage: dialogsPageType
}

export const MyPosts: React.FC<MessageType> = ({posts,}) => {

const postsElements =
    posts.map(p=> <Post message={p.postText} like={p.like}/>)

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
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            {/*<hr>*/}
            {/*{props.posts.map(p=> <div><b>{p.postText}</b></div>)}*/}
            {/*    /!*key={p.i} добавить в дивку*!/*/}
            {/*</hr>*/}
            <div>
                <textarea onChange={onPostChangeCallBack} value={props.profilePage.newPostText}/>
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