import { combineReducers } from 'redux';

import app from './App';
import auth from './Auth';

const Reducers = combineReducers({
    app,
    auth,
});

export default Reducers;
