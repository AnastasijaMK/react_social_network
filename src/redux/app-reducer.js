import {authAPI, profileAPI} from "../api/api";
import {authMeThunkCreator, setAuthUserAvatarAC, setAuthUserDataAC} from "./auth-reducer";

const SET_INITIALIZED = '/app/SET_INITIALIZED';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action)=>{
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
};

export const setInitialized = ()=>{
    return (
        {
            type: SET_INITIALIZED
        }
    )
};

// Thunk -->
export const initializeAppThunkCreator = () => {
    return (dispatch) => {
        Promise.all([dispatch(authMeThunkCreator())])
            .then(()=>{
                dispatch(setInitialized());
            });
    }
};

export default appReducer;