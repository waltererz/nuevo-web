import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import axios from 'axios';

import reportWebVitals from './reportWebVitals';

import App from './Components/App';
import Reducers from './Redux/Reducers';

// 백엔드 서버와 통신하기 위한 axios 라이브러리 설정
// 토큰을 사용하며, 인증된 클라이언트만 접근 가능
axios.defaults.xsrfCookieName = 'XSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';
axios.defaults.withCredentials = true;

// 리액트 스트립트에서 사용할 리덕스 스토어
// 리덕스 관련 내용은 /Redux 디렉토리에서 수정 가능함
const store = createStore(Reducers);

ReactDOM.render(
    <React.Fragment>
        <Provider store={store}>
            <CookiesProvider>
                <Router>
                    <App />
                </Router>
            </CookiesProvider>
        </Provider>
    </React.Fragment>,
    document.getElementById('main'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
