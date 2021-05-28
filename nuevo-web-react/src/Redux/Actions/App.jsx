import { APP_TAB } from '../Constants';

const ReduxActionAppTab = (tab) => {
    return {
        type: APP_TAB,
        state: tab,
    };
};

export { ReduxActionAppTab };
