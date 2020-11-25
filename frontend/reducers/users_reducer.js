import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_ALL_USERS, RECEIVE_USER, RECEIVE_UPDATED_USER } from "../actions/user_actions";
import { RECEIVE_PAYMENT } from "../actions/payment_actions";
import { RECEIVE_REQUEST } from "../actions/request_actions";

const usersReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    
    switch (action.type) {
        case RECEIVE_ALL_USERS:
            return action.users;
        case RECEIVE_USER:
            nextState[action.user.id] = action.user
            return nextState;
        case RECEIVE_CURRENT_USER:
            nextState[action.user.id] = action.user
            return nextState;
        case RECEIVE_PAYMENT:
            nextState[action.payload.payer.id] = action.payload.payer;
            nextState[action.payload.payee.id] = action.payload.payee;
            return nextState;
        case RECEIVE_REQUEST:
            nextState[action.payload.requestor.id] = action.payload.requestor;
            nextState[action.payload.requestee.id] = action.payload.requestee;
        default:
            return oldState;
    }
}

export default usersReducer;