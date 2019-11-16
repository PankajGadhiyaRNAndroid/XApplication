import { HOME_REQUEST, HOME_REQUEST_SUCCESS, HOME_REQUEST_FAILIER } from './Constants';

const initialState = {
    homeSuccessData: '',
    homeError: '',
    homeRequestLoading: false
};

export default function homeReducer(state = initialState, action) {
    switch (action.type) {
        case HOME_REQUEST:
            return {
                ...state,
                homeSuccessData: '',
                homeError: '',
                homeRequestLoading: action.isLoading
            };
        case HOME_REQUEST_SUCCESS:
            return {
                ...state,
                homeSuccessData: action.success,
                homeError: '',
                homeRequestLoading: false
            };
        case HOME_REQUEST_FAILIER:
            return {
                ...state,
                homeSuccessData: '',
                homeError: action.error,
                homeRequestLoading: false
            };
        default:
            return state;
    }
}
