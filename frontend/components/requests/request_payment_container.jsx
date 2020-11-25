import { connect } from "react-redux";
import RequestForm from "./request_form";
import { createRequest } from "../../actions/request_actions";
import { fetchUser, fetchAllUsers } from "../../actions/user_actions"

const mapSTP = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        allUsers: Object.values(state.entities.users),
        request: state.entities.requests,
        // Object.values(state.entities.requests)
        formType: 'request_payment',
    })
}

const mapDTP = (dispatch) => {
    return ({
        createRequest: (requestId) => dispatch(createRequest(requestId)),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchUsers: () => dispatch(fetchAllUsers())
    });
}

export default connect(mapSTP, mapDTP)(RequestForm)