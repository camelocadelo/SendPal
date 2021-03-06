import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_action';
import EditRequestFormContainer from "../requests/edit_request_form_container";


const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    }

    let component = null;
    switch (modal) {
        case 'request':
            component = <EditRequestFormContainer 
                id={modal.id} 
                balance={modal.balance}
                />;

            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    if (!state.ui.modal) {
        return {
            modal: null
        }
    } else {
        return {
            modal: state.ui.modal.modal,
            id: state.ui.modal.id
        };

    }
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);