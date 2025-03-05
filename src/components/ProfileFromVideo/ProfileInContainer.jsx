import React from "react";

import classes from "./Profile.module.css";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Loader from "../common/Loader/Loader";


const ProfileInContainer = (props)=>{
    return (
        <div className={classes.profile__page}>
            {props.profileIsFetching ?
                <Loader parent='profile_loading'/> :
                <>
                    <ProfileInfo myProfile={props.authorizedUserId}
                                 profile={props.profile}
                                 status={props.status}
                                 updateProfileStatus={props.updateProfileStatusThunk}
                                 savePhoto={props.savePhotoThunk}
                                 saveProfile={props.saveProfileThunk}
                                 profileEditMode={props.profileEditMode}/>
                    {/*<MyPosts />*/}
                    <MyPostsContainer/>
                </>
            }
        </div>
    )
}

export default ProfileInContainer;