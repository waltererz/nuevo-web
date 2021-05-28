import { APP_TAB } from '../Constants';

const page = window.location.pathname;
let initialTab = 0;

switch (page) {
    case '/':
        initialTab = 0;
        break;
    case '/assets':
        initialTab = 1;
        break;
    case '/friends':
        initialTab = 2;
        break;
    case '/clubs':
        initialTab = 3;
        break;
    case '/advisors':
        initialTab = 4;
        break;
    default:
        initialTab = 0;
}

const initialState = {
    appTab: initialTab,
};

function layout(state = initialState, action) {
    if (action.type === APP_TAB) {
        return { appTab: action.state };
    }

    return state;
}

export default layout;
