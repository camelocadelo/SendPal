import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import { login, signup, logout } from "./actions/session_actions";
import { fetchAllUsers, fetchUser } from "./actions/user_actions";
import { fetchAllPayments, fetchPayment, createPayment } from "./actions/payment_actions";

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        }
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    const root = document.getElementById('root');
    // const store = configureStore();
    ReactDOM.render(<Root store={store}/>, root)
    // window.login = login;
    // window.logout = logout;
    // window.signup = signup;
    window.fetchAllUsers = fetchAllUsers;
    window.fetchUser = fetchUser;
    window.fetchAllPayments = fetchAllPayments;
    window.fetchPayment = fetchPayment;
    window.createPayment = createPayment;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
})
