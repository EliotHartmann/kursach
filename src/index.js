import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {Route, Router, Switch} from 'react-router-dom';
import thunk from 'redux-thunk'
import {initialState} from "./store/states";
import 'bootstrap/dist/css/bootstrap.min.css';

import history from './store/history';

import {
    LOGIN_PAGE,
    REGISTER_PAGE,
    PATH,
    MAIN_PAGE,
    POLICEMAN_PAGE,
    DISPATCHER_PAGE,
    USER_PAGE, ADMIN_PAGE, RESTRICTED_PAGE
} from "./constants/paths";

import AuthPage from "./containers/AuthPage";


import NotFoundPage from "./containers/NotFoundPage";
import MainPage from "./containers/MainPage";
import RegisterPage from "./containers/RegisterPage";
import PolicemanMainComponent from "./components/PolicemanComponents/PolicemanMainComponent";
import DispatcherMainComponent from "./components/DispatcherComponents/DispatcherMainComponent";
import IndexReducer from "./store/reducers/indexReducer";
import UserMainComponent from "./components/UserComponents/UserMainComponent";
import AdminComponent from "./components/AdminComponents/AdminComponent";
import RestrictedPage from "./containers/RestrictedPage";


const store = createStore(IndexReducer, initialState, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path={PATH} component={MainPage}/>
                <Route path={PATH+LOGIN_PAGE} component={AuthPage}/>
                <Route path={PATH+REGISTER_PAGE} component={RegisterPage}/>
                <Route path={PATH+MAIN_PAGE} component={MainPage}/>
                <Route path={PATH+POLICEMAN_PAGE} component={PolicemanMainComponent}/>
                <Route path={PATH+DISPATCHER_PAGE} component={DispatcherMainComponent}/>
                <Route path={PATH+USER_PAGE} component={UserMainComponent}/>
                <Route path={PATH+ADMIN_PAGE} component={AdminComponent}/>
                <Route path={PATH+RESTRICTED_PAGE} component={RestrictedPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
