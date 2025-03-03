import {NavLink} from "react-router-dom";

import classes from "./User.module.css";
import userPhoto from '../../../assets/img/channels4_profile.jpg';

const User = (props) => {
    const user = props.user;

    const followUser = ()=>{
        props.followUserThunk(user.id);
    };

    const unfollowUser = ()=>{
        props.unfollowUserThunk(user.id);
    };

    return (
        <div className={classes.user}>
            <div className={classes.user__aside}>
                <NavLink to={'/profile/' + user.id}>
                    <div className={classes.user__img}>
                    {/*Для внешнего запроса*/}
                    <img src={user.photos.small ? user.photos.small : userPhoto} alt=""/>

                    {/*Для внутреннего запроса на users.json*/}
                    {/*<img src={user.img ? user.img : userPhoto} alt={user.name}/>*/}
                </div>
                </NavLink>
                <button onClick={user.followed ? unfollowUser : followUser}
                        className={user.followed ? `${classes.user__button} ${classes['user__button--active']}` : `${classes.user__button}`}
                        disabled={props.followingInProcess.some(id => id === user.id)}>
                    {user.followed ? 'Unfollow' : 'Follow'}
                </button>
            </div>
            <div className={classes.user__info}>
                <NavLink to={'/profile/' + user.id} className={classes.user__link}>
                    <div className={classes.user__data}>
                        <p className={classes.user__name}>{user.name}</p>
                        <p className={classes.user__status}>{user.status}</p>
                    </div>
                    <div className={classes.user__location}>
                        {/*Для внешнего запроса*/}
                        <p>Россия, Нижний Новгород</p>

                        {/*Для внутреннего запроса на users.json*/}
                        {/*<p>{`${user.location.country}, ${user.location.city}`}</p>*/}
                    </div>
                </NavLink>
            </div>
        </div>
    )
};

export default User;