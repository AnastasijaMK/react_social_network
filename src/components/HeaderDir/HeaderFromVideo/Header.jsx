import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../../assets/img/logo.svg';

const Header = (props)=> {
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
                        {props.isAuth ?
                            <div>
                                <NavLink to='/profile'>
                                    <span className={`${classes.header__user} ${classes.user}`}>
                                        <span className={classes.user__photo}>
                                            <img src={props.avatar ? props.avatar : 'https://cdn.culture.ru/images/9632c4c5-80e2-5db1-a4f2-5676986c9c41'}
                                                 alt={props.login}/>
                                        </span>
                                    </span>
                                </NavLink>
                                <button className={classes.header__logout} onClick={props.logoutThunk}>Log out</button>
                            </div>
                            :
                            <NavLink to={'/login'} className={classes.header__button}>Login</NavLink>
                        }
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;