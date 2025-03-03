import React from "react";
import {connect} from "react-redux";

import {
    followAC,
    setCurrentPageAC,
    setFollowingStatusAC,
    unfollowAC,
    getUsersThunkCreator,
    followUserThunkCreator,
    unfollowUserThunkCreator
} from "../../redux/users-reducer";

import UsersInContainer from "./UsersInContainer";
import {getCurrentPage, getFetchingStatus, getFollowingStatus, getPageSize, getTotalUsersCount, getUsers, getUsersReselectLib} from "../../redux/users-selectors";

class UsersContainerClass extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsersThunk(pageNumber, this.props.pageSize);
    }

    render() {
        return <UsersInContainer totalUsersCount={this.props.totalUsersCount}
                          pageSize={this.props.pageSize}
                          users={this.props.users}
                          currentPage={this.props.currentPage}
                          onPageChange={this.onPageChange}
                          follow={this.props.follow}
                          unfollow={this.props.unfollow}
                          isFetching={this.props.isFetching}
                          setFollowingStatus={this.props.setFollowingStatus}
                          followingInProcess={this.props.followingInProcess}
                          followUserThunk={this.props.followUserThunk}
                          unfollowUserThunk={this.props.unfollowUserThunk}
        />;
    }
}

// С помощью селекторов
const mapStateToProps = (state) => {
    return {
       // users: getUsers(state),
        users: getUsersReselectLib(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getFetchingStatus(state),
        followingInProcess: getFollowingStatus(state)
    }
};
// Без селекторов
// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProcess: state.usersPage.followingInProcess
//     }
// };

const mapDispatchToProps = (dispatch)=>{
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setCurrentPage: (currentPage)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setFollowingStatus: (fetchingStatus, userId)=>{
            dispatch(setFollowingStatusAC(fetchingStatus, userId));
        },
        getUsersThunk: (currentPage, pageSize)=>{
            dispatch(getUsersThunkCreator(currentPage, pageSize));
        },
        followUserThunk: (userId)=>{
            dispatch(followUserThunkCreator(userId));
        },
        unfollowUserThunk: (userId)=>{
            dispatch(unfollowUserThunkCreator(userId));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainerClass);
