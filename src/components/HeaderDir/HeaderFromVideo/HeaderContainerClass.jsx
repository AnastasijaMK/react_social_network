import React from 'react';
import Header from "./Header";
import {
    setAuthUserAvatarAC,
    setAuthUserDataAC,
    authMeThunkCreator,
    logoutThunkCreator
} from "../../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainerClass extends React.Component {
    render () {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state)=>{
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        avatar: state.auth.avatar
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        setAuthUserData: (id, email, login) => {
            dispatch(setAuthUserDataAC(id, email, login));
        },
        setAuthUserAvatar: (avatar) => {
            dispatch(setAuthUserAvatarAC(avatar));
        },
        logoutThunk: () => {
            dispatch(logoutThunkCreator());
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainerClass);