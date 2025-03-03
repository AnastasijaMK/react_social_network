import React from 'react';
import classes from './FormControls.module.css';

const FormControl = ({input, meta, child, ...props})=>{
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.field_block +
        (hasError ? ' ' + classes["field_block--error"] : '')}>
            {props.children}
            {hasError && <span>{meta.error}</span>}
        </div>
    )
};

export const Textarea = (props)=>{
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}>
        <textarea {...input} {...restProps}></textarea>
    </FormControl>
};

export const Input = (props)=>{
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}>
        <input {...input} {...restProps}></input>
    </FormControl>
};



// export const Textarea = ({input, meta, ...props})=>{
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={classes.field_block +
//             (hasError ? ' ' + classes["field_block--error"] : '')}>
//             <textarea {...input} {...props}></textarea>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// };
//
// export const Input = ({input, meta, ...props})=>{
//     const hasError = meta.touched && meta.error;
//     return (
//         <label className={classes.field_block +
//             (hasError ? ' ' + classes["field_block--error"] : '')}>
//             <input {...input} {...props}></input>
//             {hasError && <span>{meta.error}</span>}
//         </label>
//     )
// };

