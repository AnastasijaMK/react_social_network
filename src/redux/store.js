import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import commonReducer from "./common-reducer";

const store = {
    _state: {
        commonData: {
            usersData: [
                {id: 1, name: 'Dmitriy', img: 'https://i.pinimg.com/736x/e8/35/d9/e835d94e30b8779cb8bc732947db4448.jpg'},
                {id: 2, name: 'Andrey', img: 'https://wallpaperswide.com/download/cute_cougar_cub_2-wallpaper-2000x1333.jpg'},
                {id: 3, name: 'Svetlana', img: 'https://udoba.org/sites/default/files/h5p/content/48621/images/file-6345c0d820a92.jpg'},
                {id: 4, name: 'Alexander', img: 'https://avatars.mds.yandex.net/i?id=c766b924b530562c04e146c7d1227a07_l-5360359-images-thumbs&n=13'},
                {id: 5, name: 'Victor', img: 'https://avatars.mds.yandex.net/i?id=a5bc872a5cadbfcc95715b5e3e01efff_l-5163701-images-thumbs&n=13'},
                {id: 6, name: 'Valery', img: 'https://images.wallpaperscraft.com/image/single/roe_summer_nature_81768_1920x1080.jpg'}
            ],
        },
        profilePage: {
            postsData: [
                {id: 1, text: "Hi, how are you?", like: 15},
                {id: 2, text: "It's my first post", like: 20}
            ],
            newPostText: ''
        },
        dialogsPage: {
            messagesData: [
                {id: 1, message: 'Hi!', userId: 2, isCurrent: true},
                {id: 2, message: 'How are you?', userId: 2, isCurrent: true},
                {id: 3, message: "I'm fine, thanks, and you?", userId: 6, isCurrent: false}
            ],
            newMessageText: ''
        }
    },
    _callSubscriber() {},

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.commonData = commonReducer(this._state.commonData, action);

        this._callSubscriber(this);
    }
};

export {store};