import React from 'react';
import classes from "./Login.module.css";
import {Navigate} from "react-router-dom";
import {connect, useSelector} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {loginThunkCreator} from "../../../redux/auth-reducer";

const Login = (props) => {
    // const isAuth = useSelector(state => state.auth.isAuth);
    // if(isAuth) return <Navigate to="/profile"/>

    // Функция для обработки отправки формы
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if(props.isAuth) {
        return <Navigate to="/profile" replace/>
    }

    return (
        <div>
            <div className={classes.login_head}>
                <h1>Login</h1>
            </div>
            <div className={classes.login_wrap}>
                <LoginFormRedux onSubmit={onSubmit}/>
            </div>

        </div>
    )
}

const LoginForm = (props)=>{
    return(
        <div className={`${classes.login_form} ${classes.form}`}>
            <form onSubmit={props.handleSubmit(props.onSubmit)}>
                <div className={classes.form_field}>
                    <Field type={"text"}
                           placeholder={"Login..."}
                           component={Input}
                           name={"email"}
                           required
                           validate={[required]}/>
                </div>
                <div className={classes.form_field}>
                    <Field type={"password"}
                           placeholder={"Password..."}
                           component={Input}
                           name={"password"}
                           required
                           validate={[required]}/>
                </div>
                <div className={`${classes.form_field} ${classes.agreement}`}>
                    <label className={classes.form_label}>
                        <Field type={"checkbox"}
                               component={Input}
                               name={"rememberMe"}/>
                        <span className={classes.agreement__box}>
                            Remember me
                        </span>
                    </label>
                </div>
                {props.error &&
                    <div className={classes.form_error}>
                        {props.error}
                    </div>
                }
                <div className={classes.form_action}>
                    <button className={classes.form_button}>Log in</button>
                </div>
            </form>
        </div>
    )
}

const LoginFormRedux = reduxForm({
    form: 'login'
})(LoginForm)


const mapStateToProps = (state)=>{
    return {
        isAuth: state.auth.isAuth
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        login: (login, password, rememberMe)=>{
            dispatch(loginThunkCreator(login, password, rememberMe));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);