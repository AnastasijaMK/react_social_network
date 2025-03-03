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
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" fill="none">
                    <g clip-path="url(#clip0_1608_2)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M366.263 145.737L197.301 263.046L20.5754 204.13C8.23968 200.01 -0.0710129 188.436 -3.71852e-05 175.433C0.0718724 162.431 8.47782 150.928 20.8612 146.951L472.689 1.44658C483.429 -2.00601 495.217 0.827411 503.195 8.80564C511.173 16.7839 514.007 28.5714 510.553 39.3121L365.049 491.139C361.072 503.522 349.569 511.928 336.567 512C323.564 512.071 311.99 503.76 307.87 491.425L248.668 313.842L366.263 145.737Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1608_2">
                            <rect width="512" height="512" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </button>
        </form>
    )
};

const AddNewPostFormRedux = reduxForm({
    form: 'profile-new-post'
})(AddNewPostForm)

export {MyPostsInContainer};


