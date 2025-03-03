import classes from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props)=>{
    const path = `/dialogs/${props.user_id}`;
    return(
        <div className={classes.dialogs__item}>
            <NavLink className={({isActive})=>(isActive ? `${classes.dialogs__link} ${classes.dialogs__link_active}` : classes.dialogs__link)} to={path}>
                <div className={classes.dialogs__img}>
                    <img src={props.user_img} alt={props.user}/>
                </div>
                <p>{props.user}</p>
            </NavLink>
        </div>
    )
};

export default Dialog;