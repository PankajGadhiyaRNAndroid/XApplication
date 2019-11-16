import * as appConst from '../utils/AppConstants';

const baseURLLocal = appConst.SERVER_URL;

//  HEADER STRING IF YOU HAVE HEADER
const userData = "HEADER STRING";

export const apiRequest = {
    baseURL: baseURLLocal,
    timeOut: 30000
};

// api request with header suppose if you have a 
// authorized header like username password JWT you can easy manage from here 
// basically perpose is
export const apiHeaderRequest = {
    baseURL: baseURLLocal,
    headers: {
        Accept: appConst.application_json,
        Authorization: userData && userData.token
    },
    timeOut: 30000
};