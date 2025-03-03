// Создана для демонстрации реализации технологии connect, mapStateToProps, mapDispatchToProps
// Реализация через хуки useSelector() и useDispatch() в /components/Profile/MyPosts/MyPosts.jsx

// Реализация с помощью Redux
import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPostsInContainer = React.memo((props) => {
    const posts = props.profilePage.postsData;

    const postsElements = posts.map((post, index)=>{
        return <Post key={index} message={post.text} likeCount={post.like}/>;
    });

    const addPost = (formData)=>{
        props.addPost(formData.newPost);
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

export {MyPostsInContainer};


