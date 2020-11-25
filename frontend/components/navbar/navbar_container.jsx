import { connect } from "react-redux";
import NavBar from './navbar'
import { logout } from "../../actions/session_actions";

const mapSTP = (state) => {
    return ({
        user: state.entities.users[state.session.id]
    })
}

const mapDTP = (dispatch) => {
    return ({
        logout: () => dispatch(logout())
    })

}

export default connect(mapSTP, mapDTP)(NavBar)