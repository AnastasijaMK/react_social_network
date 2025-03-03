import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../../assets/img/logo.svg';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {authMeThunkCreator, logoutThunkCreator} from "../../../redux/auth-reducer";

const Header = ()=> {
    const isAuth = useSelector(state => state.auth.isAuth);
    const login = useSelector(state => state.auth.login);
    const avatar = useSelector(state => state.auth.avatar);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(authMeThunkCreator());
    },[]);

    const logOut = ()=>{
        dispatch(logoutThunkCreator());
    };

    return(
        <div className={classes.header__container}>
            <header className={classes.header}>
                <div className={classes.header__left}>
                    <div className={classes.header__logo}>
                        <img src={logo} alt=""/>
                    </div>
                </div>
                <div className={classes.header__right}>
                    <div className={classes.header__login}>
                        {isAuth ?
                            <div>
                                <NavLink to='/profile'>
                                <span className={`${classes.header__user} ${classes.user}`}>
                                    <span className={classes.user__photo}>
                                        <img src={avatar ? avatar : 'https://cdn.culture.ru/images/9632c4c5-80e2-5db1-a4f2-5676986c9c41'}
                                             alt={login}/>
                                    </span>
                                </span>
                                </NavLink>
                                <button className={classes.header__logout} onClick={logOut}>Log out</button>
                            </div> :
                            <NavLink to={'/login'} className={classes.header__button}>Login</NavLink>
                        }
                    </div>
                </div>
            </header>
        </div>
    )
}

export { Header };