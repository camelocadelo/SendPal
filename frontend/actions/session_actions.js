import * as sessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

const clearSessionErrors = () => ({
    type: CLEAR_ERRORS
});


export const signup = (user) => (dispatch) => {
    return sessionAPIUtil.signup(user)
        .then((payload) => {dispatch(receiveCurrentUser(payload))})
        .fail((payload) => {dispatch(receiveErrors(payload.responseJSON));
    });
};

export const login = (user) => (dispatch) => {
    return sessionAPIUtil.login(user)
        .then((payload) => {dispatch(receiveCurrentUser(payload))})
        .fail((payload) => {dispatch(receiveErrors(payload.responseJSON));
    });
};

export const logout = () => (dispatch) => {
    return sessionAPIUtil.logout()
        .then((payload) => {dispatch(logoutCurrentUser());
    });
};

export const clearErrors = () => (dispatch) => {
    return dispatch(clearSessionErrors());
};