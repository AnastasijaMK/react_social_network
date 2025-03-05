import classes from "./ProfileDataInEditMode.module.css";
import {Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {required} from "../../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import React from "react";
import ProfileContactsForm from "./ProfileContactsForm";

const ProfileDataInEditMode = (props) => {
    return (
        <div className={classes.user__data}>
            <form onSubmit={props.handleSubmit(props.onSubmit)}>
                <p className={classes.form__row}>
                    <b>Full name:</b>
                    <Field type={"text"}
                           placeholder={"Full name..."}
                           component={Input}
                           name={"fullName"}
                           required
                           validate={[required]}/>
                </p>
                <p className={classes.form__row}>
                    <b>About me:</b>
                    <Field component={Textarea}
                           placeholder="About me..."
                           name="aboutMe"
                           validate={[]}/>
                </p>
                <p className={classes.form__row}>
                    <b>Looking for a job:</b>
                    <label className={classes.form_label}>
                        <Field type={"checkbox"}
                               component={Input}
                               name={"lookingForAJob"}/>
                    </label>
                </p>

                <p className={classes.form__row}>
                    <b>Job description:</b>
                    <Field component={Textarea}
                           placeholder="Job description..."
                           name="lookingForAJobDescription"
                           validate={[]}/>
                </p>


                <div className={classes.user__contacts}>
                    {props.profile.contacts &&
                    Object.keys(props.profile.contacts).map((key, index) => {
                        return <ProfileContactsForm key={index} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                    })
                    }
                </div>

                {props.error &&
                <div className={classes.form_error}>
                    {props.error}
                </div>
                }

                <button className={classes.user__edit_button}>Save</button>
            </form>
        </div>
    )
};

const ProfileDataInEditModeRedux = reduxForm({
    form: 'profileInEditMode',
    destroyOnUnmount: false
})(ProfileDataInEditMode)

export default ProfileDataInEditModeRedux;