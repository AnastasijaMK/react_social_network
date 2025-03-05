import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

import ProfileInContainer from "./ProfileInContainer";
import {
    setProfileFetchingStatusAC,
    setProfileInfoAC,
    getProfileDataThunkCreator, setProfileStatusAC, updateProfileStatusThunkCreator, getProfileStatusThunkCreator, savePhotoThunkCreator, saveProfileThunkCreator
} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainerClass extends React.Component {
    componentDidMount() {
        this.fetchProfileData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.profileId !== this.props.profileId) {
            this.fetchProfileData();
        }
    }

    fetchProfileData = () => {
        this.props.setProfileFetchingStatus(true);

        let userId = this.props.profileId;
        if(!userId) {
            //userId = 31952;
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.getProfileDataThunk(userId);
        this.props.getProfileStatusThunk(userId);
    }


        render() {
        return(
            <ProfileInContainer {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        profileIsFetching: state.profilePage.profileIsFetching,
        myProfile: state.profilePage.myProfile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
        profileEditMode: state.profilePage.profileEditMode
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setProfileInfo: (profileInfo) => {
            dispatch(setProfileInfoAC(profileInfo));
        },
        setProfileFetchingStatus: (fetchingStatus) => {
            dispatch(setProfileFetchingStatusAC(fetchingStatus));
        },
        setProfileStatus: (profileStatus) => {
            dispatch(setProfileStatusAC(profileStatus));
        },
        getProfileDataThunk: (profileId) => {
            dispatch(getProfileDataThunkCreator(profileId));
        },
        getProfileStatusThunk: (profileId) => {
            dispatch(getProfileStatusThunkCreator(profileId));
        },
        updateProfileStatusThunk: (status) => {
            dispatch(updateProfileStatusThunkCreator(status));
        },
        savePhotoThunk: (photo) => {
            dispatch(savePhotoThunkCreator(photo));
        },
        saveProfileThunk: (profile) => {
            dispatch(saveProfileThunkCreator(profile));
        }
    }
}

// Пример HOC с compose
// то же самое, что и:
// let ProfileContainerClassWithRedirect = withAuthRedirect(ProfileContainerClass);
// export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainerClassWithRedirect);
let ProfileContainerClassWithRedirect = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(ProfileContainerClass);

export default ProfileContainerClassWithRedirect;
// суть compose:
// в последних скобках прописываем компонент, с которым начинаем проводить манипуляции
// затем в обратном порядке перечисляем процессы
// сначала ProfileContainerClass отправляем в withAuthRedirect
// затем результат выполнения withAuthRedirect отправляем в connect и тд
// нужен для сокращения записи