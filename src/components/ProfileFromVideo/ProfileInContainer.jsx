import React from "react";

import classes from "./Profile.module.css";

import Banner from "../Banner/Banner";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Loader from "../common/Loader/Loader";


const ProfileInContainer = (props)=>{
    return (
        <div className={classes.profile__page}>
            {props.profileIsFetching ?
                <Loader parent='profile_loading'/> :
                <>
                    <Banner/>
                    <ProfileInfo profile={props.profile}
                                 status={props.status}
                                 updateProfileStatus={props.updateProfileStatusThunk}/>
                    {/*<MyPosts />*/}
                    <MyPostsContainer/>
                </>
            }
        </div>
    )
}

export default ProfileInContainer;