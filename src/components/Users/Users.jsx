// Реализация с помощью Redux
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import classes from './Users.module.css';
import User from "./User/User";
import {
    followAC,
    followUserThunkCreator,
    getUsersThunkCreator,
    setCurrentPageAC,
    setFollowingStatusAC,
    unfollowAC,
    unfollowUserThunkCreator
} from "../../redux/users-reducer";
import Pagination from "../Pagination/Pagination";


const Users = ()=>{
    const usersData = useSelector(state => state.usersPage.users);
    const currentPage = useSelector(state => state.usersPage.currentPage);
    const totalUsersCount = useSelector(state => state.usersPage.totalUsersCount);
    const pageSize = useSelector(state => state.usersPage.pageSize);
    const followingInProcess = useSelector(state => state.usersPage.followingInProcess);
    const dispatch = useDispatch();

    useEffect(() => {
        if(usersData.length === 0) {
            // Внутренний запрос
            // fetch('/api/users.json')
            //     .then(response => response.json())
            //     .then(response => {
            //         dispatch(setUsersAC(response));
            //     });

            // Внешний запрос
            dispatch(getUsersThunkCreator(currentPage, pageSize));
        }
    }, [usersData.length]); // Добавлено состояние зависимостей

    const onFollow = (id)=>{
      dispatch(followAC(id));
    };

    const onUnfollow = (id)=>{
        dispatch(unfollowAC(id));
    };

    const onSetFollowingStatus = (fetchingStatus, id)=>{
        dispatch(setFollowingStatusAC(fetchingStatus, id));
    };

    const followUserThunk = (id)=>{
        dispatch(followUserThunkCreator(id));
    };

    const unfollowUserThunk = (id)=>{
        dispatch(unfollowUserThunkCreator(id));
    };


    const usersList = usersData.map((user)=>{
        return (
            <User key={user.id}
                  user={user}
                  follow={onFollow}
                  unfollow={onUnfollow}
                  setFollowingStatus={onSetFollowingStatus}
                  followingInProcess={followingInProcess}
                  followUserThunk={followUserThunk}
                  unfollowUserThunk={unfollowUserThunk}
            />
        )
    })


    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    const itemsPerPage = 9;


    const onPageChange = (pageNumber)=>{
        dispatch(setCurrentPageAC(pageNumber));
        dispatch(getUsersThunkCreator(pageNumber, pageSize));
    };


    return(
        <div>
            <div className={classes.users_head}>
                <h1>Users</h1>
            </div>
            <div className={classes.users_list}>
                {usersList}
            </div>
            <Pagination pagesCount={pagesCount} currentPage={currentPage} itemsPerPage={itemsPerPage} changePage={onPageChange}/>
        </div>
    );
}

export default Users;