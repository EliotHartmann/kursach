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
    ADMIN_PAGE,
    RESTRICTED_PAGE,
    POLICEMAN_INFO,
    POLICEMAN_CALLS,
    POLICEMAN_DATABASE,
    DISPATCHER_INFO,
    DISPATCHER_NEW_CALL, USER_INFO, USER_STATS, POLICEMAN, INFO, NEWS_PAGE, CAREER_PAGE
} from "./constants/paths";

import AuthPage from "./containers/pages/AuthPage";


import NotFoundPage from "./containers/pages/NotFoundPage";
import MainPage from "./containers/pages/MainPage";
import RegisterPage from "./containers/pages/RegisterPage";
import IndexReducer from "./store/reducers/indexReducer";
import RestrictedPage from "./containers/pages/RestrictedPage";
import AdminPage from "./containers/pages/AdminPage";
import PolicemanInfoComponent from "./components/PolicemanComponents/PolicemanInfoComponent";
import PolicemanCallsComponent from "./components/PolicemanComponents/PolicemanCallsComponent";
import PolicemanWorkWithDBComponent from "./components/PolicemanComponents/PolicemanWorkWithDBComponent";
import DispatcherInfoComponent from "./components/DispatcherComponents/DispatcherInfoComponent";
import DispatcherCallComponent from "./components/DispatcherComponents/DispatcherCallComponent";
import UserStatsComponent from "./components/UserComponents/UserStatsComponent";
import NewsPage from "./containers/pages/NewsPage";
import CareerPage from "./containers/pages/CareerPage";

export const apiUrl = "192.168.43.80:7313";
const store = createStore(IndexReducer, initialState, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path={PATH} component={MainPage}/>
                <Route path={PATH+LOGIN_PAGE} component={AuthPage}/>
                <Route path={PATH+REGISTER_PAGE} component={RegisterPage}/>
                <Route path={PATH+MAIN_PAGE} component={MainPage}/>
                <Route path={PATH+POLICEMAN_INFO} component={PolicemanInfoComponent}/>
                <Route path={PATH+POLICEMAN_CALLS} component={PolicemanCallsComponent}/>
                <Route path={PATH+POLICEMAN_DATABASE} component={PolicemanWorkWithDBComponent}/>
                <Route path={PATH+DISPATCHER_INFO} component={DispatcherInfoComponent}/>
                <Route path={PATH+DISPATCHER_NEW_CALL} component={DispatcherCallComponent}/>
                <Route path={PATH+USER_STATS} component={UserStatsComponent}/>
                <Route path={PATH+ADMIN_PAGE} component={AdminPage}/>
                <Route path={PATH+RESTRICTED_PAGE} component={RestrictedPage}/>
                <Route path={PATH+NEWS_PAGE} component={NewsPage}/>
                <Route path={PATH+CAREER_PAGE} component={CareerPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
