// Реализация с помощью Redux
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = () => {
    const posts = useSelector(state => state.profilePage.postsData);
    const newPostText = useSelector(state => state.profilePage.newPostText);
    const dispatch = useDispatch();


    const postsElements = posts.map((post, index)=>{
        return <Post key={index} message={post.text} likeCount={post.like}/>;
    });

    const newPostElement = React.createRef();

    const addPost = ()=>{
        if (newPostText.trim() !== '') { // Проверка на пустой текст
            dispatch(addPostActionCreator());
        }
    };

    const onPostChange = ()=>{
        const postText = newPostElement.current.value;
        dispatch(updateNewPostTextActionCreator(postText));
    };

    return (
        <div>
            <h2>My posts</h2>
            <div className={classes.field_wrap}>
                <div className={classes.field_block}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={newPostText} placeholder="What's new?"></textarea>
                </div>
                <button onClick={ addPost }></button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export {MyPosts};


// Реализация контекста с помощью React Context API
// import React from 'react';
// import { useContext } from 'react';
// import classes from './MyPosts.module.css';
// import {Post} from "./Post/Post";
// import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
// import StoreContext from "../../../store-context";
//
//
// const MyPosts = () => {
//     let {store} = useContext(StoreContext);
//     const posts = store.getState().profilePage.postsData;
//     const newPostText = store.getState().profilePage.newPostText;
//     const dispatch = store.dispatch;
//
//     const postsElements = posts.map((post, index)=>{
//         return <Post key={index} message={post.text} likeCount={post.like}/>;
//     });
//
//     const newPostElement = React.createRef();
//
//     const addPost = ()=>{
//         if (newPostText.trim() !== '') { // Проверка на пустой текст
//             dispatch(addPostActionCreator());
//         }
//     };
//
//     const onPostChange = ()=>{
//         const postText = newPostElement.current.value;
//         dispatch(updateNewPostTextActionCreator(postText));
//     };
//
//     return (
//         <div>
//             <h2>My posts</h2>
//             <div className={classes.field_wrap}>
//                 <div className={classes.field_block}>
//                     <textarea onChange={onPostChange} ref={newPostElement} value={newPostText} placeholder="What's new?"></textarea>
//                 </div>
//                 <button onClick={ addPost }></button>
//             </div>
//             <div className={classes.posts}>
//                 {postsElements}
//             </div>
//         </div>
//     )
// }
//
// export {MyPosts};