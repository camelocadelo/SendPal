import React from 'react';
import { Link } from 'react-router-dom';

class EditRequestForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.request;
        this.deleteRequest = this.deleteRequest.bind(this);
    }
    
    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    deleteRequest() {
        this.props.deleteRequest(this.state.id)
            .then(() => {
                this.props.closeModal()
            });
    }

    handleSubmit() {
        event.preventDefault();
        // this.props.currentUser // {id: 9, email: "LisaREALG@noblecheetah.io", balance: 1006}
        if (Number(this.state.amount) >= 0) {
            this.props.updateRequest(this.state)
                .then(() => {
                    this.props.closeModal()
                    this.props.updateBalance(this.state.amount)
                })
        } else { 
            return "errors"
        }
    };


    render() {
        return (
            <div className="edit-request-container" >
                <div className="edit-request-wrapper">
                    <div className="edit-request-header">
                        <div className="edit-header-left">
                            <h1 className="edit-left-head">{this.props.requestee.email}</h1>
                            <p>DATE HERE</p>
                            <p>Money Received</p>
                        </div>
                        <h1 className="edit-request-amount">+ $ {this.props.request.amount}</h1>
                    </div>
                    <div className="edit-details-wrapper">
                        <div className="left-details-wrapper">
                            <div className="left-details">
                                <h2>Requested By</h2>
                                <p id="edit-email">{this.props.currentUser.email}</p>
                            </div>
                            <div className="left-details">
                                <h2>Transaction ID</h2>
                                <p>00000HJ{this.props.request.id}</p>
                                {/* <p>{Math.floor(Math.random(1) *10000000)}H{this.props.request.id}</p> */}
                            </div>
                            <button className="delete-btn"
                                onClick={this.deleteRequest}>Delete Request
                            </button>
                        </div>
                        <form className="edit-form" onSubmit={this.handleSubmit}>
                            <br/>
                            <label>Note</label>
                            <input className="edit-note"
                                type="text"
                                value={this.state.note}
                                placeholder="NOTE"
                                onChange={this.update('note')}
                                required={true}
                            />
                            <label>Details</label>
                            <div>
                                <div className="edit-details-right">
                                    <p>Sent by {this.props.requestee.email}</p>
                                    <div className="details-right-amount">
                                        <span>$ </span>
                                        <input className="edit-amount"
                                            type="text"
                                            value={this.state.amount} //prefilled
                                            placeholder="AMOUNT"
                                            onChange={this.update('amount')}
                                            required={true}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="edit-total">
                                <h2>TOTAL</h2>
                                <p>$ {this.state.amount}</p>
                            </div>
                            <input className="edit-request-btn"
                                type="submit"
                                value="Edit Request"
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    };
};

export default EditRequestForm;