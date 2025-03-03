import classes from './Post.module.css';

const Post = (props)=>{
    return(
        <div className={classes.item}>
            <div className={classes.item__img}>
                <img src="https://i.pinimg.com/736x/e8/35/d9/e835d94e30b8779cb8bc732947db4448.jpg" alt=""/>
            </div>
            <div className={classes.item__text}>
                {props.message}
            </div>
            <div className={classes.item__like}>
                <span className={classes.item__like_count}>{props.likeCount}</span>
                <button></button>
            </div>
        </div>
    )
};

export {Post};