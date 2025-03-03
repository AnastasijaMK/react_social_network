// Реализация с помощью Redux
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";


const MyPosts = React.memo(() => {
    const posts = useSelector(state => state.profilePage.postsData);
    const dispatch = useDispatch();


    const postsElements = posts.map((post, index)=>{
        return <Post key={index} message={post.text} likeCount={post.like}/>;
    });

    const addPost = (formData)=>{
        if (formData.newPost.trim() !== '') {
            dispatch(addPostActionCreator(formData.newPost));
        }
    };

    return (
        <div>
            <h2>My posts</h2>
            <AddNewPostFormRedux onSubmit={addPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
});

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) =>{
    return (
        <form className={classes.field_wrap} onSubmit={props.handleSubmit(props.onSubmit)}>
            <Field component={Textarea}
                   placeholder="What's new?"
                   name="newPost"
                   validate={[required, maxLength10]}/>
            <button></button>
        </form>
    )
};

const AddNewPostFormRedux = reduxForm({
    form: 'profile-new-post'
})(AddNewPostForm)

export {MyPosts};
