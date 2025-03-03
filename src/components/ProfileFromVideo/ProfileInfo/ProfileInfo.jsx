import classes from "./ProfileInfo.module.css";
import Loader from "../../common/Loader/Loader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/img/channels4_profile.jpg";

const ProfileInfo = (props)=>{
    if(!props.profile) {
        return <Loader parent='profile_loading'/>
    }
  return(
      <div className={classes.user}>
          <div className={classes.user__icon}>
              <img src={props.profile.photos && props.profile.photos.small === null ? userPhoto : props.profile.photos.small} alt={props.profile.fullName}/>
          </div>
          <div className={classes.user__info}>
              <p className={classes.user__name}>{props.profile.fullName}</p>
              <p>Date of Birth: 2 January</p>
              <p>Location: Moscow</p>
              <ProfileStatus status={props.status} updateStatus={props.updateProfileStatus}/>
          </div>
      </div>
  )
};

export default ProfileInfo;