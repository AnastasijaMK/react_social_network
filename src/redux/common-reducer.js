let initialState = {
    usersData: [
        {
            id: 1,
            name: 'Dmitriy',
            img: 'https://i.pinimg.com/736x/e8/35/d9/e835d94e30b8779cb8bc732947db4448.jpg'
        },
        {
            id: 2,
            name: 'Andrey',
            img: 'https://wallpaperswide.com/download/cute_cougar_cub_2-wallpaper-2000x1333.jpg'
        },
        {
            id: 3,
            name: 'Svetlana',
            img: 'https://udoba.org/sites/default/files/h5p/content/48621/images/file-6345c0d820a92.jpg'
        },
        {
            id: 4,
            name: 'Alexander',
            img: 'https://avatars.mds.yandex.net/i?id=c766b924b530562c04e146c7d1227a07_l-5360359-images-thumbs&n=13'
        },
        {
            id: 5,
            name: 'Victor',
            img: 'https://avatars.mds.yandex.net/i?id=a5bc872a5cadbfcc95715b5e3e01efff_l-5163701-images-thumbs&n=13'
        },
        {
            id: 6,
            name: 'Valery',
            img: 'https://images.wallpaperscraft.com/image/single/roe_summer_nature_81768_1920x1080.jpg'
        }
    ]
};

const commonReducer = (state = initialState, action)=>{
    switch(action.type) {
        default:
            return state;

    }
};

export default commonReducer;