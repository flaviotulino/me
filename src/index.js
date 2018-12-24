import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';

import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import reducers from "./reducers";

// import 'bulma/css/bulma.css';
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from './components/NavBar';

import './index.scss';

const store = createStore(reducers);

const app =
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <NavBar/>
                <Route path={'/'} component={App}/>
            </div>
        </BrowserRouter>
    </Provider>;

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
