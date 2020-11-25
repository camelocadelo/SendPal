import React from 'react';
import { Link } from 'react-router-dom';

class RequestShow extends React.Component {
    // componentDidMount() {
    //     this.props.fetchRequest(this.props.match.params.requestId)
    // }

    render() {
        return (
            <div className="confirmation-container">
                <div className="confirmation-wrapper">
                    <div className="confirmation-content">
                        <img className="confirmation-image" src={window.check_icon} alt="" />
                        <div className="confirmation-text">
                            <span>You've requested</span>
                            <h3> ${this.props.request.amount}  </h3>
                            <span> from </span> 
                            <p> {this.props.requestee.email}</p>
                        </div>
                    </div>
                    <Link className="confirmation-button" to="/myaccount/request">Request More Money</Link>
                    <Link className="confirmation-link" to="/myaccount">Go to Summary</Link>
                </div>
            </div>
        )
    }
}

export default RequestShow;