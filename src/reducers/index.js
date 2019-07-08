import {ADD_USER_REGISTER_DATA} from "../constants/actionTypes";
import {initialState} from '../store';

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_REGISTER_DATA:
            return Object.assign({}, state, {
                user: action.payload
            });
        default:
            return state;
    }
};

export default rootReducer;