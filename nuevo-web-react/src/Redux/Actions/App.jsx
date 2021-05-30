import { APP_INIT, APP_TAB } from '../Constants';

const ReduxActionAppTab = (tab) => {
    return {
        type: APP_TAB,
        state: tab,
    };
};

const ReduxActionAppInit = () => {
    return {
        type: APP_INIT,
        state: true,
    };
};

export { ReduxActionAppInit, ReduxActionAppTab };
