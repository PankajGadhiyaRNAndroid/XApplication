// Event Emmitter Facebook
import { Platform, Dimensions } from 'react-native';

var { EventEmitter } = require('fbemitter');
export const emitter = new EventEmitter();

// export const SERVER_URL = 'http://192.168.0.11/giftcashlaravel/public/api/';
export const SERVER_URL = 'http://api.nytimes.com/svc/mostpopular/v2/';
export const application_json = 'application/json';
export const api_key = 'G3qi8b3BHZjBNnBG63MOE9g9iQzBiWXA';

export function ifIphoneX() {
    const dimen = Dimensions.get('window');
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        ((dimen.height === 812 || dimen.width === 812) || (dimen.height === 896 || dimen.width === 896))
    );
}