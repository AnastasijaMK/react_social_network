// Создана для демонстрации реализации через хуки useSelector() и useDispatch()
// Реализация через технологии connect, mapStateToProps, mapDispatchToProps в /components/Dialogs/DialogsContainer.jsx и /components/Dialogs/DialogsInContainer.jsx

// Реализация с помощью Redux
import React from 'react';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import classes from './Dialogs.module.css';
import {addMessageActionCreator} from "../../redux/dialog-reducer";
import {useDispatch, useSelector} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = ()=>{
    const users = useSelector(state => state.commonData.usersData);
    const messages = useSelector(state => state.dialogsPage.messagesData);
    const dispatch = useDispatch();


    const usersElements = users.map((user)=>{
            return <Dialog user={user.name} user_id={user.id} user_img={user.img} key={user.id}></Dialog>;
        }
    );

    const messagesElements = messages.map((el)=>{
        const user = users.find((user)=>{
            return user.id === el.userId;
        });
        return <Message text={el.message} user={user.name} avatar={user.img} isCurrent={el.isCurrent} key={el.id}/>
    });

    const sendMessage = (formData)=>{
        if (formData.newMessage.trim() !== '') {
            dispatch(addMessageActionCreator(formData.newMessage));
        }
    };

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogs__head}>
                <h1>Dialogs</h1>
            </div>
            <div className={classes.dialogs__inner}>
                <div className={classes.dialogs__list}>
                    {usersElements}
                </div>
                <div className={classes.dialogs__messages}>
                    <div className={classes.dialogs__messages_list}>
                        {messagesElements}
                    </div>

                    <AddMessageFormRedux onSubmit={sendMessage} />

                </div>
            </div>
        </div>
    )
};

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return (
        <form className={classes.field_wrap} onSubmit={props.handleSubmit(props.onSubmit)}>
            <Field component={Textarea}
                       name="newMessage"
                       placeholder="Enter your message..."
                       validate={[required, maxLength100]}/>
            <button></button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'dialog-new-message'
})(AddMessageForm)

export default Dialogs;