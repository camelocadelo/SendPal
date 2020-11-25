import Search from './search';
import { connect } from 'react-redux';

const mapSTP = (state) => {
    return ({
        users: state.entities.users
    })
}


const mapDTP = (dispatch) => {
    return ({})
}


export default connect(mapSTP, mapDTP)(Search)