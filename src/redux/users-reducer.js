import {followAPI, usersAPI} from "../api/api";

const FOLLOW = '/users/FOLLOW';
const UNFOLLOW = '/users/UNFOLLOW';
const SET_USERS = '/users/SET_USERS';
const SET_CURRENT_PAGE = '/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = '/users/SET_TOTAL_USERS_COUNT';
const SET_FETCHING_STATUS = '/users/SET_FETCHING_STATUS';
const SET_FOLLOWING_STATUS = '/users/SET_FOLLOWING_STATUS';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProcess: [] // добавляем сюда id того пользователя, на которого пытаемся подписаться/отписаться
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user)=>{
                    if(user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user)=>{
                    if(user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                }),
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        case SET_FETCHING_STATUS:
            return {
                ...state,
                isFetching: action.fetchingStatus
        };
        case SET_FOLLOWING_STATUS:
            return {
                ...state,
                followingInProcess: action.fetchingStatus ?
                    [...state.followingInProcess, action.userId] :
                    [state.followingInProcess.filter(id => id !== action.userId)]
        };
        default:
            return state;
    }
};

export const followAC = (userId)=>{
    return {
        type: FOLLOW,
        userId
    }
};
export const unfollowAC = (userId)=>{
    return {
        type: UNFOLLOW,
        userId
    }
};
export const setUsersAC = (users)=>{
    return {
        type: SET_USERS,
        users
    }
};
export const setCurrentPageAC = (currentPage)=>{
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
};
export const setTotalUsersCountAC = (totalUsersCount)=>{
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    }
};

export const setFetchingStatusAC = (fetchingStatus)=>{
    return {
        type: SET_FETCHING_STATUS,
        fetchingStatus
    }
}

export const setFollowingStatusAC = (fetchingStatus, userId)=>{
    return {
        type: SET_FOLLOWING_STATUS,
        fetchingStatus,
        userId
    }
}


// Thunk -->
export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setFetchingStatusAC(true));

        let response = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setUsersAC(response.items));
        dispatch(setTotalUsersCountAC(response.totalCount));
        if(response) dispatch(setFetchingStatusAC(false));
    }
}

export const followUserThunkCreator = (userId) => {
    return async (dispatch) => {
        dispatch(setFollowingStatusAC(true, userId));

        const response = await followAPI.follow(userId);
        // Если успешно (resultCode = 0)
        if(response.resultCode === 0) {
            dispatch(followAC(userId));
        }
        if(response) dispatch(setFollowingStatusAC(false, userId));
    }
}

export const unfollowUserThunkCreator = (userId) => {
    return async (dispatch) => {
        dispatch(setFollowingStatusAC(true, userId));

        const response = await followAPI.unfollow(userId)
        if(response.resultCode === 0) {
            dispatch(unfollowAC(userId));
        }
        if(response) dispatch(setFollowingStatusAC(false, userId));
    }
}

export default usersReducer;