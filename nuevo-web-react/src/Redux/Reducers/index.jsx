import { combineReducers } from 'redux';

import app from './App';
import layout from './Layout';
import event from './Event';

const Reducers = combineReducers({
    app,
    layout,
    event,
});

export default Reducers;
