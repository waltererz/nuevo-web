import { AUTH_SIGNIN, AUTH_SIGNOUT } from '../Constants';

const initialState = {
    personData: false,
};

function auth(state = initialState, action) {
    switch (action.type) {
        case AUTH_SIGNIN:
            return { personData: action.state };
            break;
        case AUTH_SIGNOUT:
            return { personData: false };
            break;
    }

    return state;
}

export default auth;
