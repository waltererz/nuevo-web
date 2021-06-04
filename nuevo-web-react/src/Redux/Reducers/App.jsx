import CONSTANT from '../../Components/Common/Constants';
import { APP_ROUTE } from '../Constants';

const path = window.location.pathname;
let route = 0;

switch (true) {
    case /\//.test(path):
        route = CONSTANT.MAINROUTE.HOME;
        break;
    case /^\/assets((\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]+)*)$/g.test(path):
        route = CONSTANT.MAINROUTE.ASSETS;
        break;
    case /^\/friends((\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]+)*)$/g.test(path):
        route = CONSTANT.MAINROUTE.FRIENDS;
        break;
    case /^\/clubs((\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]+)*)$/g.test(path):
        route = CONSTANT.MAINROUTE.CLUBS;
        break;
    case /^\/advisors((\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]+)*)$/g.test(path):
        route = CONSTANT.MAINROUTE.ADVISORS;
        break;
}

const initialState = {
    route: route,
};

function app(state = initialState, action) {
    switch (action.type) {
        case APP_ROUTE:
            return { route: action.state };
    }

    return state;
}

export default app;
