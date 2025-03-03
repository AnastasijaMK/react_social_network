// Реализация с помощью Redux
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { HashRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// Реализация контекста с помощью React Context API
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import store from "./redux/redux-store";
// import App from './App';
// import StoreContext from "./store-context";
//
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
//
// const renderEntireTree = ()=>{
//     root.render(
//         <React.StrictMode>
//             <StoreContext.Provider value={{store}}>
//                     <App />
//             </StoreContext.Provider>
//         </React.StrictMode>
//     );
// };
//
// renderEntireTree();
//
// store.subscribe(renderEntireTree);
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

