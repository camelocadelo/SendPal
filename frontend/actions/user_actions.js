import * as UserApiUtil from "../util/user_util";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_UPDATED_USER = "RECEIVE_UPDATED_USER"

const receiveAllUsers = (users) => {
    // debugger
    return ({
        type: RECEIVE_ALL_USERS,
        users
    })
};

const receiveUser = (user) => {
    return ({
        type: RECEIVE_USER,
        user
    })
};

const receiveUpdatedUser = (payload) => {
    return ({
        type: RECEIVE_UPDATED_USER,
        payload
    })
}

export const fetchAllUsers = () => {
    return (dispatch) => {
        return UserApiUtil.fetchAllUsers().then((payload) => {
            dispatch(receiveAllUsers(payload))
        })
    }
};


export const fetchUser = (userId) => {
    return (dispatch) => {
        return UserApiUtil.fetchUser(userId).then((user) => {
            dispatch(receiveUser(user))
        })
    }
};

// export const updateUser = (userId) => {
//     return (dispatch) => {
//         return UserApiUtil.updateUser(userId).then((payload) => {
//             dispatch(receiveUpdatedUser(payload))
//         })
//     }
// }