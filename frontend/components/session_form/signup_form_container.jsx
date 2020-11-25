import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login, signup, clearErrors } from "../../actions/session_actions";

const mapSTP = (state, ownProps) => {
    return ({
        errors: state.errors.session,
        formType: 'signup'
    })
}

const mapDTP = (dispatch) => {
    return ({
        processForm: (form) => dispatch(signup(form)),
        clearErrors: () => dispatch(clearErrors()),
        demoLogin: (user) => dispatch(login(user))
    })
}

export default connect(mapSTP, mapDTP)(SessionForm)