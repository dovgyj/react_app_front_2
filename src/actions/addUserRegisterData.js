import {ADD_USER_REGISTER_DATA} from "../constants/actionTypes";
import {dispatch} from "redux";

const addUserRegisterData = (payload) => {

    //api call

    const action = {
        type: ADD_USER_REGISTER_DATA,
        payload:payload
    }
    dispatch(action);
};

export default addUserRegisterData;