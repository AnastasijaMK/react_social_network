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
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" x="0" y="0" viewBox="0 0 391.837 391.837">
                        <g><path d="M285.257 35.528c58.743.286 106.294 47.836 106.58 106.58 0 107.624-195.918 214.204-195.918 214.204S0 248.165 0 142.108c0-58.862 47.717-106.58 106.58-106.58a105.534 105.534 0 0 1 89.339 48.065 106.578 106.578 0 0 1 89.338-48.065z" fill="#ffffff"></path></g>
                    </svg>
                </button>
            </div>
        </div>
    )
};

export {Post};