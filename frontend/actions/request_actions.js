import * as RequestApiUtil from "../util/request_api_util";

export const RECEIVE_ALL_REQUESTS = "RECEIVE_ALL_REQUESTS";
export const RECEIVE_REQUEST = "RECEIVE_REQUEST";
export const REMOVE_REQUEST = "REMOVE_REQUEST"

const receiveAllRequests = (requests) => {
    return ({
        type: RECEIVE_ALL_REQUESTS,
        requests
    });
};

const receiveRequest = (payload) => {
    return ({
        type: RECEIVE_REQUEST,
        payload
    });
};

const removeRequest = (requestId) => {
    return ({
        type: REMOVE_REQUEST,
        requestId
    });
};

export const fetchAllRequests = (userId) => {
    return (dispatch) => {
        return RequestApiUtil.fetchAllRequests(userId).then((payload) => {
            dispatch(receiveAllRequests(payload))
        });
    };
};

export const fetchRequest = (requestId) => {
    return (dispatch) => {
        return RequestApiUtil.fetchRequest(requestId).then((request) => {
            dispatch(receiveRequest(request))
        });
    };
};

export const createRequest = (requestId) => {
    return (dispatch) => {
        return RequestApiUtil.createRequest(requestId).then((payload) => {
            return dispatch(receiveRequest(payload))
        })
        // .fail((resp) => console.log(resp));
    };
};

export const updateRequest = (request) => {
    return (dispatch) => {
        return RequestApiUtil.updateRequest(request).then((payload) => {
            dispatch(receiveRequest(payload))
        });
    };
};