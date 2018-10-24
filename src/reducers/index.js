import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import chatReducer from './chat_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
    chat: chatReducer,
    form: formReducer,
    user: userReducer
});

export default rootReducer;

