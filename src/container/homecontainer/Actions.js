import axios from 'axios';
import { HOME_REQUEST, HOME_REQUEST_SUCCESS, HOME_REQUEST_FAILIER } from './Constants';
import { apiRequest } from '../../services/ApiConfig';
import * as appConst from '../../utils/AppConstants';

const axiosDefaults = require('axios/lib/defaults');
axiosDefaults.baseURL = apiRequest.baseURL;
axiosDefaults.headers = apiRequest.headers;
axiosDefaults.timeout = apiRequest.timeOut;

/*
    API REQUEST FOR HOME INITIAL LOADING AND AFTERWARD RESULT
 */

export const initialHomeRequest = loading => dispatch => dispatch(homeResult(loading));

export const homeRequest = perios => dispatch => axios
    .get(`mostviewed/all-sections/${perios}.json?api-key=${appConst.api_key}`)
    .then((response) => {
        
        dispatch(homeSuccessResult(response.data.results));
    })
    .catch((error) => {
        dispatch(homeFailResult(error.response.data));
    });

/*
    API RESULT 
 */

export const homeSuccessResult = success => ({
    type: HOME_REQUEST_SUCCESS,
    success
});

export const homeFailResult = error => ({
    type: HOME_REQUEST_FAILIER,
    error
});

export const homeResult = isLoading => ({
    type: HOME_REQUEST,
    isLoading
});
