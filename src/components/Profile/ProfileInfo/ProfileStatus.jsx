import React, {useEffect, useState} from 'react';
import classes from "./ProfileInfo.module.css";
import {useDispatch} from "react-redux";
import {updateProfileStatusThunkCreator} from "../../../redux/profile-reducer";

const ProfileStatus = (props) => {
    const [editStatusMode, setEditStatusMode] = useState(false);
    const [currentStatus, setCurrentStatus] = useState(props.status);

    const dispatch = useDispatch();

    const activateEditStatusMode = () => {
        setEditStatusMode(true);
    };

    const deactivateEditStatusMode = () => {
        setEditStatusMode(false);
        dispatch(updateProfileStatusThunkCreator(currentStatus));
    };

    const onStatusChange = (e) => {
        setCurrentStatus(e.currentTarget.value);
    };

    useEffect(()=>{
        setCurrentStatus(props.status);
    }, [props.status]);

    return (
        <div className={classes.user_status}>
            {!editStatusMode &&
            <div className={classes.user_status__text}>
                <span onDoubleClick={activateEditStatusMode}>{props.status || 'No status'}</span>
            </div>
            }
            {editStatusMode &&
            <div className={classes.user_status__field}>
                <input type="text"
                       value={currentStatus}
                       autoFocus
                       onChange={onStatusChange}/>
                <button onClick={deactivateEditStatusMode}></button>
            </div>
            }
        </div>
    )
}

export default ProfileStatus;