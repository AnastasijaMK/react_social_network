import React from "react";

import classes from "./Users.module.css";

import User from "./User/User";
import Pagination from "../Pagination/Pagination";
import Loader from "../common/Loader/Loader";


const UsersInContainer = (props)=>{
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const itemsPerPage = 9;

    return (
        <div>
            <div className={classes.users_head}>
                <h1>Users</h1>
            </div>
            <div className={classes.user_wrap}>
                <div className={props.isFetching ? `${classes.users_list} ${classes["users_list--loading"]}` : classes.users_list}>
                    {
                        props.users.map((user)=> {
                            return (
                                <User key={user.id}
                                      user={user}
                                      follow={props.follow}
                                      unfollow={props.unfollow}
                                      setFollowingStatus={props.setFollowingStatus}
                                      followingInProcess={props.followingInProcess}
                                      followUserThunk={props.followUserThunk}
                                      unfollowUserThunk={props.unfollowUserThunk}/>
                            )
                        })
                    }
                </div>
                {props.isFetching && <Loader parent='user_loading'/>}
                <Pagination pagesCount={pagesCount} currentPage={props.currentPage} itemsPerPage={itemsPerPage} changePage={props.onPageChange}/>
            </div>

        </div>
    )
};

export default UsersInContainer;