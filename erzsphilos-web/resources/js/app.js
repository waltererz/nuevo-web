// 리액트 기본 컴포넌트
import React from 'react';
import ReactDOM from 'react-dom';

// 리액트 라우터 컴포넌트
import { BrowserRouter as Router } from 'react-router-dom';

// API 통신을 위한 axios 컴포넌트
import axios from 'axios';

// 프론트엔드 디자인을 위한 머티리얼 컴포넌트 (테마)
import { ThemeProvider } from '@material-ui/core/styles';

// 사용자정의 컴포넌트
import App from './components/App';
import Theme from './components/Theme';

// API 통신 인증을 위한 기본설정 (axios)
axios.defaults.xsrfCookieName = 'XSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';
axios.defaults.withCredentials = true;

if (document.getElementById('app')) {
    ReactDOM.render(
    <React.Fragment>
        <Router>
            <ThemeProvider theme={Theme}>
                <App />
            </ThemeProvider>
        </Router>
    </React.Fragment>, document.getElementById('app'));
}