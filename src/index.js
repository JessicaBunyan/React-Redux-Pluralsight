import 'babel-polyfill'
import configureStore from "./store/configureStore";
import React, { PureComponent } from 'react'
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {loadCourses} from "./actions/courseActions"

const store = configureStore(); //might want to use this to rehydrate state from local storage e.g
store.dispatch(loadCourses());


render(
    <Provider store={store}>

        <Router history={browserHistory} routes={routes} />
    </Provider>
    , document.getElementById('app')
);