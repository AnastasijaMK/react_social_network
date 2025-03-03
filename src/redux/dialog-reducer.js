const ADD_MESSAGE = '/dialog/ADD-MESSAGE';

let initialState = {
    messagesData: [
        {id: 1, message: 'Hi!', userId: 2, isCurrent: true},
        {id: 2, message: 'How are you?', userId: 2, isCurrent: true},
        {id: 3, message: "I'm fine, thanks, and you?", userId: 6, isCurrent: false}
    ]
};

const dialogReducer = (state = initialState, action)=>{

    switch(action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: state.messagesData.length + 1,
                message: action.newMessageText,
                userId: 6,
                isCurrent: false
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            };
        default:
            return state;
    }
};

export const addMessageActionCreator = (newMessageText)=>{
    return {
        type: ADD_MESSAGE,
        newMessageText: newMessageText
    }
};

export default dialogReducer;