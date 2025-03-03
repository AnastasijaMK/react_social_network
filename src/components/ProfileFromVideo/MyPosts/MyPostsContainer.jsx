// Создана для демонстрации реализации технологии connect, mapStateToProps, mapDispatchToProps
// Реализация через хуки useSelector() и useDispatch() в /components/Profile/MyPosts/MyPosts.jsx

import { connect } from 'react-redux';
import {MyPostsInContainer} from "./MyPostsInContainer";
import {addPostActionCreator} from "../../../redux/profile-reducer";

const mapStateToProps = (state)=>{
    return {
        profilePage: state.profilePage
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        addPost: (newPost)=>{
            dispatch(addPostActionCreator(newPost));
        },
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPostsInContainer);

export default MyPostsContainer;