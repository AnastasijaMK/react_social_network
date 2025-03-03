import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Banner from "../Banner/Banner";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import React, {useEffect} from "react";
import {
    setProfileFetchingStatusAC,
    setProfileInfoAC,
    getProfileDataThunkCreator, getProfileStatusThunkCreator
} from "../../redux/profile-reducer";
import Loader from "../common/Loader/Loader";

const Profile = ()=>{
    const myProfile = useSelector(state => state.profilePage.myProfile);
    const profile = useSelector(state => state.profilePage.profile);
    const status = useSelector(state => state.profilePage.status);
    const profileFetchingStatus = useSelector(state => state.profilePage.profileIsFetching);
    const dispatch = useDispatch();

    let { profileId } = useParams();

    useEffect(()=> {
        dispatch(setProfileFetchingStatusAC(true));

        if(!profileId) {
            profileId = 31952;
        }
        dispatch(getProfileDataThunkCreator(profileId));
        dispatch(getProfileStatusThunkCreator(profileId));


        // if(!profileId) {
        //     dispatch(setProfileInfoAC(myProfile));
        //     dispatch(setProfileFetchingStatusAC(false));
        // } else {
        //     dispatch(getProfileDataThunkCreator(profileId));
        // }
    }, [profileId]);


    return(
        <div className={classes.profile__page}>
            {profileFetchingStatus ?
                <Loader parent='profile_loading'/> :
                <>
                    <Banner/>
                    <ProfileInfo profile={profile}
                                 status={status}/>
                    <MyPosts />
                </>
            }
        </div>
    )
};

export {Profile};


// Исходная версия
// import classes from './Profile.module.css';
// import {MyPosts} from "./MyPosts/MyPosts";
// import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import Banner from "../Banner/Banner";
//
// const Profile = (props)=>{
//     return(
//         <div className={classes.profile__page}>
//             <Banner/>
//             <ProfileInfo/>
//             <MyPosts posts={props.data.postsData}
//                      newPostText={props.data.newPostText}
//                      dispatch={props.dispatch}
//             />
//         </div>
//     )
// };
//
// export {Profile};