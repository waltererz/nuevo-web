import { AUTH_SIGNIN, AUTH_SIGNOUT } from '../Constants';

const initialState = {
    authData: false,
};

function auth(state = initialState, action) {
    switch (action.type) {
        case AUTH_SIGNIN:
            return { authData: action.state };
            break;
        case AUTH_SIGNOUT:
            return { authData: false };
            break;
    }

    return state;
}

export default auth;
