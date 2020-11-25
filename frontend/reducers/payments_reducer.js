import { RECEIVE_ALL_PAYMENTS, RECEIVE_PAYMENT, RECEIVE_UPDATED_USER } from "../actions/payment_actions";

 
const paymentsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_PAYMENTS:
            return action.payments;
        case RECEIVE_PAYMENT:
            // debugger
            nextState[action.payload.payment.id] = action.payload.payment;
        // nextState = action.payload.payment;
            return nextState;
        default:
            return oldState;
    }
}

export default paymentsReducer;