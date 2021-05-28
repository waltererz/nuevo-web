import { AUTH_SIGNIN, AUTH_SIGNOUT } from '../Constants';

const ReduxActionSignIn = (data) => {
    return {
        type: AUTH_SIGNIN,
        state: data,
    };
};

const ReduxActionSignOut = () => {
    return {
        type: AUTH_SIGNOUT,
    };
};

export { ReduxActionSignIn, ReduxActionSignOut };
