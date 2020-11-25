import { connect } from 'react-redux';
import RequestShow from './request_show';
import { fetchRequest } from '../../actions/request_actions';

const mapSTP = (state, ownProps) => {
    // debugger
    //test
    let request = state.entities.requests[(parseInt(ownProps.match.params.requestId))]
    return ({
        request: request,
        requestor: state.entities.users[request.requestor_id],
        requestee: state.entities.users[request.requestee_id]
    })
}

const mapDTP = (dispatch) => {
    return ({
        fetchRequest: (requestId) => {
            return dispatch(fetchRequest(requestId));
        },
    });
};

export default connect(mapSTP, mapDTP)(RequestShow);