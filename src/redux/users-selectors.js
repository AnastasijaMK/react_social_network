import {createSelector} from "reselect";

// Пример примитивного селектора
export const getUsers = (state) => {
    return state.usersPage.users;
};
// Если нужны какие-то вычисления в селекторе
// Если надо произвести какую-то операцию над получаемыми данными, то используем библиотеку reselect
export const getUsersReselectLib = createSelector(getUsers, (users)=>{
    return users;
});


export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};


export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
};


export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};


export const getFetchingStatus = (state) => {
    return state.usersPage.isFetching;
};

export const getFollowingStatus = (state) => {
    return state.usersPage.followingInProcess;
};