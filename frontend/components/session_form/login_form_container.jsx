import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login, clearErrors } from "../../actions/session_actions";

const mapSTP = (state, ownProps) => {
    return ({
        errors: state.errors.session,
        formType: 'login'
    })
}

const mapDTP = (dispatch) => {
    return ({
        processForm: (form) => dispatch(login(form)),
        clearErrors: () => dispatch(clearErrors()),
        demoLogin: (user) => dispatch(login(user))
    })

}

export default connect(mapSTP, mapDTP)(SessionForm)