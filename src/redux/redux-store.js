import {combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import commonReducer from "./common-reducer";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    commonData: commonReducer,
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

let store = configureStore({
    reducer: reducers
});

window.store = store;

export default store;
