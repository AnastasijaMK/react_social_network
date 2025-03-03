import {profileAPI, usersAPI} from "../api/api";
import {setFetchingStatusAC, setTotalUsersCountAC, setUsersAC} from "./users-reducer";

const ADD_POST = '/profile/ADD-POST';
const SET_PROFILE_INFO = '/profile/SET_PROFILE_INFO';
const SET_PROFILE_FETCHING_STATUS = '/profile/SET_PROFILE_FETCHING_STATUS';
const SET_PROFILE_STATUS = '/profile/SET_PROFILE_STATUS';

const myProfile = {
    fullName: 'AnastasiaMK',
    photos: {
        small: 'https://cdn.culture.ru/images/9632c4c5-80e2-5db1-a4f2-5676986c9c41'
    },
    status: 'Hi everyone! What\'s up?'
};

let initialState = {
    postsData: [
        {id: 1, text: "Hi, how are you?", like: 15},
        {id: 2, text: "It's my first post", like: 20}
    ],
    newPostText: '',
    profile: myProfile,
    profileIsFetching: false,
    myProfile: myProfile,
    status: ''
};

const profileReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: state.postsData.length + 1,
                text: action.newPostText,
                like: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost], // Создание нового массива постов
                newPostText: '' // Обнуление текста нового поста
            };
        case SET_PROFILE_INFO:
            return {
                ...state,
                profile: action.profileInfo
            }
        case SET_PROFILE_FETCHING_STATUS:
            return {
                ...state,
                profileIsFetching: action.fetchingStatus
            }
        case SET_PROFILE_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
};

export const addPostActionCreator = (newPost)=>{
    return {
        type: ADD_POST,
        newPostText: newPost
    }
};

export const setProfileInfoAC = (profileInfo) =>{
    return {
        type: SET_PROFILE_INFO,
        profileInfo
    }
};

export const setProfileStatusAC = (profileStatus) =>{
    return {
        type: SET_PROFILE_STATUS,
        status: profileStatus
    }
};

export const setProfileFetchingStatusAC = (fetchingStatus) =>{
    return {
        type: SET_PROFILE_FETCHING_STATUS,
        fetchingStatus
    }
}

// Thunk -->
export const getProfileDataThunkCreator = (profileId) => {
    return async (dispatch) => {
        const response = await profileAPI.getProfileInfo(profileId);
        dispatch(setProfileInfoAC(response));
        if(response) dispatch(setProfileFetchingStatusAC(false));
    }
}

export const getProfileStatusThunkCreator = (profileId) => {
    return async (dispatch) => {
        const response = await profileAPI.getStatus(profileId);
        dispatch(setProfileStatusAC(response));
    }
}

export const updateProfileStatusThunkCreator = (status) => {
    return async (dispatch) => {
        const response = await profileAPI.updateStatus(status);
        if(response.resultCode === 0) {
            dispatch(setProfileStatusAC(status));
        }
    }
}

export default profileReducer;