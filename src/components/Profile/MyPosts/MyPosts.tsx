import React, {ChangeEvent, FC, useState} from 'react';
import s from './Myposts.module.css'
import {Post} from "./Post/Post";
import {MyPostsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm, reset} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";
import btn from '../../common/styles/Button.module.css'
import {useFormik} from "formik";
import { useForm } from 'react-hook-form';

type myPostsFormType = {

}

const maxLength10 = maxLengthCreator(100)



export const addPostsForm: FC<InjectedFormProps<myPostsFormType>> = (props: any) => {

    return (
<form onSubmit={props.handleSubmit}>
    <Field className={s.form} component={TextArea}
     name='newPostText' placeholder='New post' validate={[required, maxLength10]}></Field>
    <div>
        <button className={btn.button}>Add post</button>
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


    const [post, setPost] = useState('')


        const addPost = (values: any) => {
            addNewPost(values.newPostText)
            setPost(post)
        }

 //    const { register, handleSubmit, reset } = useForm({
 //        resetOnS: false // отключаем автоматическое сброс поля после отправки
 //    });
 //
 // const OnSubmit = () => {
 //            reset()
 // }


        return (
            <div className={s.postsBlock}>

                <h3 className={s.font}>My posts</h3>
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