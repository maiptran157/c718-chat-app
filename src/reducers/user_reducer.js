import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false,
    displayName: '',
}

export default (state = DEFAULT_STATE, action) => {
    console.log("action:", action)
    switch (action.type) {
        case types.SIGN_IN:
        case types.SIGN_UP:
            return { auth: true, displayName: action.displayName };
        case types.SIGN_OUT:
            return { ...DEFAULT_STATE };
        default:
            return state;
    }
}