import CONSTANT from '../../Components/Common/Constants';
import { APP_ROUTE } from '../Constants';

// 현재 접속한 최초의 페이지를 저장하는 변수
// 이 변수의 값에 따라 초기 탭 선택지를 결정할 수 있음
let currentPage = 0;

// 자바스크립트의 window 객체에서 현재 경로를 받아옴
// 브라우저의 현재 경로에 따라 초기값을 지정함
switch (window.location.pathname) {
    case '/':
        currentPage = CONSTANT.MAINROUTE.HOME;
        break;
    case '/assets':
        currentPage = CONSTANT.MAINROUTE.ASSETS;
        break;
    case '/friends':
        currentPage = CONSTANT.MAINROUTE.FRIENDS;
        break;
    case '/clubs':
        currentPage = CONSTANT.MAINROUTE.CLUBS;
        break;
    case '/advisors':
        currentPage = CONSTANT.MAINROUTE.ADVISORS;
        break;
}

const initialState = {
    route: currentPage,
};

function app(state = initialState, action) {
    switch (action.type) {
        case APP_ROUTE:
            return { route: action.state };
    }

    return state;
}

export default app;
