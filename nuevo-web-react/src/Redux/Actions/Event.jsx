import { EVENT_HEADER_APPS_CLICKED, EVENT_HEADER_PROFILE_CLICKED } from '../Constants';

const ReduxActionEventHeaderAppsClicked = (state) => {
    return {
        type: EVENT_HEADER_APPS_CLICKED,
        state: state,
    };
};

const ReduxActionEventHeaderProfileClicked = (state) => {
    return {
        type: EVENT_HEADER_PROFILE_CLICKED,
        state: state,
    };
};

export { ReduxActionEventHeaderAppsClicked, ReduxActionEventHeaderProfileClicked };
