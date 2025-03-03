// Создана для демонстрации реализации технологии connect, mapStateToProps, mapDispatchToProps
// Реализация через хуки useSelector() и useDispatch() в /components/Dialogs/Dialogs.jsx

import { connect } from 'react-redux';
import DialogsInContainer from "./DialogsInContainer";
import {addMessageActionCreator} from "../../redux/dialog-reducer";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        usersData: state.commonData.usersData
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessage)=>{
            dispatch(addMessageActionCreator(newMessage));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsInContainer); // первые скобки () вызывают функцию connect, которая возвращает другую функцию, вторые скобки () вызывает эту новую возвращенную функцию

export default DialogsContainer;