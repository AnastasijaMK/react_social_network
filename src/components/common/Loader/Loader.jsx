import classes from "./Loader.module.css";
import React from "react";

const Loader = (props)=>{
    return (
        <div className={`${classes.loader__wrap} ${classes[props.parent]}`}>
            <span className={classes.loader}></span>
        </div>
    )
};

export default Loader;