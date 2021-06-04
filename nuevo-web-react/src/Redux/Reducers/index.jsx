import { combineReducers } from 'redux';

import app from './App';
import layout from './Layout';

const Reducers = combineReducers({
    app,
    layout,
});

export default Reducers;
