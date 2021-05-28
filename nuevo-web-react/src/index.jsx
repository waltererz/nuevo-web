import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import axios from 'axios';

import reportWebVitals from './reportWebVitals';

import App from './Components/App';
import Reducers from './Redux/Reducers';

axios.defaults.xsrfCookieName = 'XSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';
axios.defaults.withCredentials = true;

const store = createStore(Reducers);

ReactDOM.render(
    <React.StrictMode>
        <React.Fragment>
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        </React.Fragment>
    </React.StrictMode>,
    document.getElementById('main'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
