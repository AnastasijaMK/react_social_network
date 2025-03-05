import classes from "../ProfileInfo.module.css";
import ProfileContacts from "./ProfileContacts";
import React from "react";

const ProfileData = (props) => {
    return (
        <div className={classes.user__data}>
            <p className={classes.user__name}>
                <b>Full name:</b> {props.profile.fullName}
            </p>
            <p><b>About me:</b> {props.profile.aboutMe ? props.profile.aboutMe : ''}</p>
            <p><b>Looking for a job:</b> {props.profile.lookingForAJob ? 'yes' : 'no'}</p>
            {props.profile.lookingForAJob &&
            <p><b>Job description:</b> {props.profile.lookingForAJobDescription}</p>
            }

            <div className={classes.user__contacts}>
                {props.profile.contacts &&
                Object.keys(props.profile.contacts).map((key, index) => {
                    if(!props.profile.contacts[key]) return;
                    return <ProfileContacts key={index} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                })
                }
            </div>

            {
                Number(props.myProfile) === props.profile.userId &&
                <button className={classes.user__edit_button} onClick={props.enableEditMode}>Edit profile</button>
            }
        </div>
    )
};

export default ProfileData;