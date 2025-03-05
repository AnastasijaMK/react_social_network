import classes from "./ProfileInfo.module.css";
import Loader from "../../common/Loader/Loader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/img/channels4_profile.jpg";
import userBanner from "../../../assets/img/banner.jpg";
import {useRef} from "react";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataInEditModeRedux from "./ProfileData/ProfileDataInEditMode";
import {setProfileEditModeAC} from "../../../redux/profile-reducer";
import {useDispatch} from "react-redux";

const ProfileInfo = (props)=>{
    const dispatch = useDispatch();

    const fileInputRef = useRef(null);

    if(!props.profile) {
        return <Loader parent='profile_loading'/>
    }

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const updateUserPhoto = (e)=>{
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    };

    const enableEditMode = () =>{
        dispatch(setProfileEditModeAC(true));
    };

    // Функция для обработки отправки формы
    const onSubmit = (formData) => {
        props.saveProfile(formData);
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
                              onChange={updateUserPhoto}
                          />
                          <button className={classes.user__button} onClick={handleButtonClick}>
                              Выбрать фото
                          </button>
                      </>)
                  }
              </div>

              <div className={classes.user__info}>
                  {
                      props.profileEditMode ?
                          <ProfileDataInEditModeRedux initialValues={props.profile}
                                                      profile={props.profile}
                                                      onSubmit={onSubmit}/>
                          :
                          <ProfileData profile={props.profile}
                                       myProfile={props.myProfile}
                                       enableEditMode={enableEditMode}/>
                  }

                  <ProfileStatus status={props.status} updateStatus={props.updateProfileStatus}/>
              </div>
          </div>
      </>
  )
};

export default ProfileInfo;