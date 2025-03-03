import classes from "./Message.module.css";

const Message = (props)=>{
    return(
        <div className={props.isCurrent ? `${classes.message} ${classes.message_current}` : classes.message}>
            <div className={classes.message__user}>
                <div className={classes.message__img}>
                    <img src={props.avatar} alt={props.user}/>
                </div>
            </div>
            <div className={classes.message__content}>
                <span className={classes.message__name}>{props.user}</span>
                {props.text}
            </div>
        </div>
    )
};

export default Message;