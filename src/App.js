import  {Routes, Route, Navigate} from 'react-router-dom';
import "./App.css";


import { Header } from './components/HeaderDir/Header/Header';
import HeaderContainerClass from './components/HeaderDir/HeaderFromVideo/HeaderContainerClass';

import Sidebar  from './components/Sidebar/Sidebar';

import Login from "./components/LoginDir/LoginFromVideo/Login";
import React, {lazy} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "./hoc/withAuthRedirect";
import {initializeAppThunkCreator} from "./redux/app-reducer";
import Loader from "./components/common/Loader/Loader";


const Dialogs = lazy(() => import("./components/Dialogs/Dialogs"));
const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));

const Profile = lazy(() => import("./components/Profile/Profile"));
const ProfileApiContainer = lazy(() => import("./components/ProfileFromVideo/ProfileApiContainer"));

const Users = lazy(() => import("./components/Users/Users"));
const UsersContainerClass = lazy(() => import("./components/Users/UsersContainerClass"));




class App extends React.Component {
    componentDidMount() {
        this.props.initializeAppThunk();
    }

    render() {
        if (!this.props.isInitialized) {
            return <Loader parent='profile_loading'/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainerClass/>
                {/*<Header/>*/}
                <div className='app-container'>
                    <Sidebar />
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path="/" element={<Navigate to="/profile" />} />

                            {/*<Route path='/dialogs/*'*/}
                            {/*       element={*/}
                            {/*           <React.Suspense fallback={<Loader parent='profile_loading'/>}>*/}
                            {/*               <Dialogs/>*/}
                            {/*           </React.Suspense>*/}
                            {/*       }/>*/}
                            <Route path='/dialogs/*'
                                   element={
                                       <React.Suspense fallback={<Loader parent='profile_loading'/>}>
                                           <DialogsContainer/>
                                       </React.Suspense>
                                   }/>

                            {/*<Route path='/profile/:profileId?'*/}
                            {/*       element={*/}
                            {/*           <React.Suspense fallback={<Loader parent='profile_loading'/>}>*/}
                            {/*               <Profile/>*/}
                            {/*           </React.Suspense>*/}
                            {/*       }/>*/}
                            <Route path='/profile/:profileId?'
                                   element={
                                       <React.Suspense fallback={<Loader parent='profile_loading'/>}>
                                           <ProfileApiContainer/>
                                       </React.Suspense>
                                   }/>


                            {/*<Route path='/users'*/}
                            {/*       element={*/}
                            {/*           <React.Suspense fallback={<Loader parent='user_loading'/>}>*/}
                            {/*               <Users/>*/}
                            {/*           </React.Suspense>*/}
                            {/*       }/>*/}
                            <Route path='/users'
                                   element={
                                       <React.Suspense fallback={<Loader parent='user_loading'/>}>
                                           <UsersContainerClass/>
                                       </React.Suspense>
                                   }/>

                            <Route path='/login'
                                   element={<Login/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        isInitialized: state.app.initialized,
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        initializeAppThunk: () => {
            dispatch(initializeAppThunkCreator());
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default compose(
//     withAuthRedirect,
//     connect(mapStateToProps, mapDispatchToProps),
// )(App);