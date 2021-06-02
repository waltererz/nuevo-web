import { EVENT_HEADER_APPS_CLICKED, EVENT_HEADER_PROFILE_CLICKED } from '../Constants';

const initialState = {
    headerAppsClicked: false,
    headerProfileClicked: false,
};

function event(state = initialState, action) {
    switch (action.type) {
        case EVENT_HEADER_APPS_CLICKED:
            return { headerAppsClicked: action.state, headerProfileClicked: false };
        case EVENT_HEADER_PROFILE_CLICKED:
            return { headerProfileClicked: action.state, headerAppsClicked: false };
    }

    return state;
}

export default event;
