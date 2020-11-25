import { connect } from 'react-redux';
import PaymentShow from './payment_show';
import { fetchPayment } from '../../actions/payment_actions';

const mapSTP = (state, ownProps) => {
    let payment = state.entities.payments[(parseInt(ownProps.match.params.paymentId))]
    return ({
        payment: payment,
        payer: state.entities.users[payment.payer_id],
        payee: state.entities.users[payment.payee_id]
        // payment: state.entities.payments[ownProps.match.params.paymentId],
    })
}

const mapDTP = (dispatch) => {
    return ({
        fetchPayment: (paymentId) => {
            return dispatch(fetchPayment(paymentId));
        },
    });
};

export default connect(mapSTP, mapDTP)(PaymentShow);