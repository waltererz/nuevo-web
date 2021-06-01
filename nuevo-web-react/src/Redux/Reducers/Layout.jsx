import { LAYOUT_HEADER_PROFILE, LAYOUT_HEADER_APPS } from '../Constants';

const initialState = {
    headerProfile: false,
    headerApps: false,
};

function layout(state = initialState, action) {
    switch (action.type) {
        case LAYOUT_HEADER_PROFILE:
            return { headerProfile: action.state, headerApps: false };
        case LAYOUT_HEADER_APPS:
            return { headerProfile: false, headerApps: action.state };
    }

    return state;
}

export default layout;
