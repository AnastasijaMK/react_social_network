import {authAPI, profileAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USERS_DATA = '/auth/SET_AUTH_USERS_DATA';
const SET_AUTH_USER_AVATAR = '/auth/SET_AUTH_USER_AVATAR';
const GET_CAPTCHA_URL = '/auth/GET_CAPTCHA_URL';

const initialState= {
    userId: null,
    email: null,
    login: null,
    avatar: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_USERS_DATA:
            return {
                ...state,
                ...action.data
        }
        case SET_AUTH_USER_AVATAR:
            return {
                ...state,
                avatar: action.avatar
            }
        case GET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state;

    }
}

export const setAuthUserDataAC = (userId, email, login, isAuth)=>{
    return (
        {
            type: SET_AUTH_USERS_DATA,
            data: {
                userId,
                email,
                login,
                isAuth
            }
        }
    )
};

export const setAuthUserAvatarAC = (avatar)=>{
    return (
        {
            type: SET_AUTH_USER_AVATAR,
            avatar
        }
    )
};

export const getCaptchaUrlAC = (captchaUrl)=>{
    return (
        {
            type: GET_CAPTCHA_URL,
            captchaUrl
        }
    )
};

// Thunk -->
export const authMeThunkCreator = () => {
  return async (dispatch) => {
      let response = await authAPI.authMe();
      if(response.resultCode === 0) {
          const {id, email, login} = response.data;
          dispatch(setAuthUserDataAC(id, email, login, true));

          let profileResponse = await profileAPI.getProfileInfo(id);
          dispatch(setAuthUserAvatarAC(profileResponse.photos.small));
      }
  }
};


export const loginThunkCreator = (login, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let response = await authAPI.login(login, password, rememberMe, captcha);
        if(response.resultCode === 0) {
            // Если успешно
            dispatch(authMeThunkCreator());
        } else {
            // Если ошибка

            if(response.resultCode === 10) {
                // Если выходит капча
                dispatch(getCaptchaUrlThunkCreator());
            }

            let action = stopSubmit('login', {
                _error: response.messages.length > 0 ? response.messages[0] : 'Some error',
            });
            dispatch(action);
        }
    }
};

export const logoutThunkCreator = () => {
    return async (dispatch) => {
        let response = await authAPI.logout();
        if(response.resultCode === 0) {
            dispatch(setAuthUserDataAC(null, null, null, false));
        }
    }
};


export const getCaptchaUrlThunkCreator = () => {
    return async (dispatch) => {
        let response = await securityAPI.getCaptchaUrl();
        const captchaUrl = response.url;
        dispatch(getCaptchaUrlAC(captchaUrl));
    }
};

export default authReducer;

