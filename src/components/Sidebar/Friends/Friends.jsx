// Реализация с помощью Redux
import { useSelector, useDispatch } from 'react-redux';
import classes from './Friends.module.css';
import {NavLink} from 'react-router-dom';

const Friends = ()=> {
    const friendsList = useSelector(state => state.commonData.usersData);
    const dispatch = useDispatch();

    let friends = friendsList.slice(0,3).map((user)=>{
        return (
            <div className={classes.friends__item} key={user.id}>
                <div className={classes.friends__img}>
                    <img src={user.img} alt={user.name}/>
                </div>
                <p className={classes.friends__name}>{user.name}</p>
            </div>
        )
    });

    return(
        <div className={classes.friends}>
            <NavLink
                to="/friends"
                className={({isActive})=>(isActive ? classes.activeLink : '')}
            >
                Friends
            </NavLink>
            <div className={classes.friends__list}>
                {friends}
            </div>
        </div>
    )
};

export { Friends };



// Реализация контекста с помощью React Context API
// import { useContext } from 'react';
// import classes from './Friends.module.css';
// import {NavLink} from 'react-router-dom';
// import StoreContext from "../../../store-context";
//
// const Friends = ()=> {
//     let {store} = useContext(StoreContext);
//     const friendsList = store.getState().commonData.usersData;
//     const dispatch = store.dispatch;
//
//     let friends = friendsList.slice(0,3).map((user, index)=>{
//         return (
//             <div className={classes.friends__item}>
//                 <div className={classes.friends__img}>
//                     <img src={user.img} alt={user.name}/>
//                 </div>
//                 <p className={classes.friends__name}>{user.name}</p>
//             </div>
//         )
//     });
//
//     return(
//         <div className={classes.friends}>
//             <NavLink
//                 to="/friends"
//                 className={({isActive})=>(isActive ? classes.activeLink : '')}
//             >
//                 Friends
//             </NavLink>
//             <div className={classes.friends__list}>
//                 {friends}
//             </div>
//         </div>
//     )
// };
//
// export { Friends };