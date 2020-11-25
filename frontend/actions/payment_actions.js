import * as PaymentApiUtil from "../util/payment_api_util";

export const RECEIVE_ALL_PAYMENTS = 'RECEIVE_ALL_PAYMENTS';
export const RECEIVE_PAYMENT = 'RECEIVE_PAYMENT';

const receiveAllPayments = (payments) => {
    return({
        type: RECEIVE_ALL_PAYMENTS,
        payments
    })
};

const receivePayment = (payload) => {
    return ({
        type: RECEIVE_PAYMENT,
        payload
    })
};

export const fetchAllPayments = (userId) => {
    return (dispatch) => {
        return PaymentApiUtil.fetchAllPayments(userId).then((payload) => {
            dispatch(receiveAllPayments(payload))
        })
    }
};

export const fetchPayment = (paymentId) => {
    return (dispatch) => {
        return PaymentApiUtil.fetchPayment(paymentId).then((payment) => {
            dispatch(receivePayment(payment))
        })
    }
};

export const createPayment = (paymentId) => {
    return (dispatch) => {
        return PaymentApiUtil.createPayment(paymentId).then((payload) => {
            return dispatch(receivePayment(payload))
        })
        // .fail((resp) => console.log(resp))
    }
};

// export const updateUser = (userId) => {
//     return (dispatch) => {
//         return UserApiUtil.updateUser(userId).then((user) => {
//             dispatch(receiveUpdatedUser(user))
//         })
//     }
// }