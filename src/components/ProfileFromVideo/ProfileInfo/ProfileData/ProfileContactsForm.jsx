import {Input} from "../../../common/FormsControls/FormsControls";
import {required} from "../../../../utils/validators/validators";
import {Field} from "redux-form";
import React from "react";
import classes from "./ProfileDataInEditMode.module.css";

const ProfileContactsForm = ({contactTitle, contactValue}) => {
    return (
        <div>
            <p className={classes.form__row}>
                <b>{contactTitle}:</b>
                <Field type={"text"}
                       placeholder={contactTitle + "..."}
                       value={contactValue}
                       component={Input}
                       name={'contacts.' + contactTitle}
                       validate={[]}/>
            </p>
        </div>
    )
};


export default ProfileContactsForm;