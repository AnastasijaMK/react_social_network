// Создана для демонстрации реализации технологии connect, mapStateToProps, mapDispatchToProps
// Реализация через хуки useSelector() и useDispatch() в /components/Dialogs/Dialogs.jsx

// Реализация с помощью Redux
import React from 'react';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import classes from './Dialogs.module.css';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const DialogsInContainer = (props)=>{
    const users = props.usersData;
    const messages = props.dialogsPage.messagesData;


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

    const sendMessage = (formData) => {
        if (formData.newMessage.trim() !== '') { // Проверка на пустой текст
            props.sendMessage(formData.newMessage);
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

export default DialogsInContainer;