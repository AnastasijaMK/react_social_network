import classes from './Navbar.module.css';
import {NavLink, useLocation} from 'react-router-dom';
import {useSelector} from "react-redux";

const Navbar = ()=> {
    const isAuth = useSelector(state => state.auth.isAuth);
    const location = useLocation();

    return(
        <nav className={classes.nav}>
            <ul className={classes.nav__list}>
                <li className={classes.item}>
                    {/*Если подключаю в App.js <Profile/>*/}
                    {/*<NavLink*/}
                    {/*    to={isAuth ? '/profile' : '/login'}*/}
                    {/*    className={({isActive})=>(isActive && location.pathname === '/profile' ? classes.activeLink : '')}*/}
                    {/*>*/}
                    {/*    Profile*/}
                    {/*</NavLink>*/}
                    {/*Если подключаю в App.js <ProfileApiContainer/>*/}
                    <NavLink
                        to="/profile"
                        className={({isActive})=>(isActive ? classes.activeLink : '')}
                    >
                        Profile
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink
                        to={isAuth ? '/dialogs' : '/login'}
                        className={({isActive})=>(isActive && location.pathname === '/dialogs' ? classes.activeLink : '')}
                    >
                        Dialogs
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink
                        to="/users"
                        className={({isActive})=>(isActive ? classes.activeLink : '')}
                    >
                        Users
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
};

export { Navbar };