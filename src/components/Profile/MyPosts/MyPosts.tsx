import React, {ChangeEvent, FC} from 'react';
import s from './Myposts.module.css'
import {Post} from "./Post/Post";
import {MyPostsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";


type myPostsFormType = {

}

const maxLength10 = maxLengthCreator(10)

export const addPostsForm: FC<InjectedFormProps<myPostsFormType>> = (props: any) => {
    return (
<form onSubmit={props.handleSubmit}>
    <Field component={TextArea}
     name='newPostText' placeholder='New post' validate={[required, maxLength10]}
    ></Field>
    <div>
        <button>Add post</button>
    </div>
</form>
    )
}

const MyPostsReduxForm = reduxForm<myPostsFormType> ({
    form: 'MyPost'
})(addPostsForm)


export const MyPosts: React.FC<MyPostsType> = React.memo(({posts, postText,addNewPost, onPost}) => {


        const postsElements =
            posts.map(p => <Post name={p.title}
                                 like={p.like}
                                 id={p.id}
                                 key={p.id}

            />)


        const addPost = (values: any) => {
            addNewPost(values.newPostText)
        }


        return (
            <div className={s.postsBlock}>

                <h3>My posts</h3>
                {/*<hr>*/}
                {/*{props.posts.map(p=> <div><b>{p.postText}</b></div>)}*/}
                {/*    /!*key={p.i} добавить в дивку*!/*/}
                {/*</hr>*/}
                <MyPostsReduxForm onSubmit={addPost}/>
                <div>
                    {postsElements}
                </div>
            </div>

        )
    }
)