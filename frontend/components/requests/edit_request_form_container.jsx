import EditRequestForm from "./edit_request_form";
import { connect } from 'react-redux';
import { fetchRequest, updateRequest } from "../../actions/request_actions";
import { closeModal } from '../../actions/modal_action';

const mapSTP = (state, ownProps) => {
    let request = state.entities.requests[state.ui.modal.id];
    let requestee = state.entities.users[state.entities.requests[state.ui.modal.id].requestee_id]
    return ({
        currentUser: state.entities.users[state.session.id],
        request: request,
        requestee: requestee,
        formType: 'update_request',
        updateBalance: (balance) => state.ui.modal.balance(balance)
    })
}

const mapDTP = (dispatch) => {
    return ({
        fetchRequest: (requestId) => dispatch(fetchRequest(requestId)),
        updateRequest: (request) => dispatch(updateRequest(request)),
        closeModal: () => dispatch(closeModal()),
    });
}

export default connect(mapSTP, mapDTP)(EditRequestForm)