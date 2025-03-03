import classes from "./ProfileInfo.module.css";
import Loader from "../../common/Loader/Loader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/img/channels4_profile.jpg";
import userBanner from "../../../assets/img/banner.jpg";
import {useRef} from "react";

const ProfileInfo = (props)=>{
    const fileInputRef = useRef(null);

    if(!props.profile) {
        return <Loader parent='profile_loading'/>
    }

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const updateUserIcon = (e)=>{
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    };

  return(
      <>
          <div className={classes.banner}>
              <img src={props.profile.photos?.large || userBanner} alt=""/>
          </div>
          <div className={classes.user}>
              <div className={classes.user__icon}>
                  <img src={props.profile.photos?.small || userPhoto}
                       alt={props.profile.fullName || "Фото пользователя"}/>
                  {
                      Number(props.myProfile) === props.profile.userId &&
                      (<>
                          <input
                              type="file"
                              id="file-upload"
                              ref={fileInputRef}
                              style={{ display: "none" }}
                              onChange={updateUserIcon}
                          />
                          <button className={classes.user__button} onClick={handleButtonClick}>
                              Выбрать фото
                          </button>
                      </>)
                  }
              </div>
              <div className={classes.user__info}>
                  <p className={classes.user__name}>{props.profile.fullName}</p>
                  <p>Date of Birth: 2 January</p>
                  <p>Location: Moscow</p>
                  <ProfileStatus status={props.status} updateStatus={props.updateProfileStatus}/>
              </div>
          </div>
      </>
  )
};

export default ProfileInfo;