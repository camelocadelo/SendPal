import { combineReducers } from 'redux';
import usersReducer from "./users_reducer"
import paymentsReducer from "./payments_reducer";
import requestsReducer from "./requests_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    payments: paymentsReducer,
    requests: requestsReducer
});

export default entitiesReducer;