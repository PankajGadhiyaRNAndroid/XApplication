/**
 * Combine all reducers in this file and export the combined reducers.
 * you can set multiple reducers for each screen and your application flow will be easily managed 
 */

import { combineReducers } from 'redux';
import homeReducer from '../container/homecontainer/HomeReducer';

const createReducer = combineReducers({
    homescreen: homeReducer,
});

export default createReducer;
