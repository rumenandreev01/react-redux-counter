import {combineReducers} from 'redux';

import isLogged from './isLogged';
import counter from './counter';

const rootReducer = combineReducers({isLogged,counter});

export default rootReducer;

