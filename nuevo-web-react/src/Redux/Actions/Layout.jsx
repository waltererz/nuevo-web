import { LAYOUT_HEADER_PROFILE, LAYOUT_HEADER_APPS } from '../Constants';

const ReduxActionLayoutHeaderProfile = (display) => {
    return {
        type: LAYOUT_HEADER_PROFILE,
        state: display,
    };
};

const ReduxActionLayoutHeaderApps = (display) => {
    return {
        type: LAYOUT_HEADER_APPS,
        state: display,
    };
};

export { ReduxActionLayoutHeaderProfile, ReduxActionLayoutHeaderApps };
