import { APP_ROUTE } from '../Constants';

const ReduxActionAppRoute = (route) => {
    return {
        type: APP_ROUTE,
        state: route,
    };
};

export { ReduxActionAppRoute };
