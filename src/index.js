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
import { loadAuthors } from './actions/authorActions';
import DevTools from './components/DevTools';

const store = configureStore(); //might want to the optional params here to rehydrate state from local storage e.g
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
    <Provider store={store}>
    <div>

        <Router history={browserHistory} routes={routes} />
        <DevTools></DevTools>
    </div>
    </Provider>
    , document.getElementById('app')
);