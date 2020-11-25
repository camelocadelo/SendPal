import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from "../search/search_container";

class RequestForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email: '',
            payment: ''
        };
        this.updateEmail = this.updateEmail.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.props.fetchUsers();
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    updateEmail(email) {
        this.setState({
            email: email
        })
    }

    handleSubmit(email) {
        event.preventDefault();

        this.props.allUsers.map((user) => {
            if (user.email === email) {
                this.userId = user.id
            };
        });

        if (Number(this.state.amount) >= 0) {
            this.props.createRequest({
                amount: this.state.amount,
                note: this.state.note,
                requestor_id: this.props.currentUser.id,
                requestee_id: this.userId
            })
            .then((res) => {
                this.props.history.push(`/req_confirmation/${res.payload.request.id}`)})
        } else { 
            return "errors" // create error props
        }
    };

    // handleChange(e) {
    //     const re = /[0-9.]+/g;
    //     if (e.target.value === '' || re.test(e.target.value)) {
    //         this.setState({ value: e.target.value });
    //     }
    // }

    render(){

        return (            
            <div className="form-content">
                <div className="form-container">
                    <div className="form-box">
                        <div>
                            <form className="form-fields" onSubmit={() => this.handleSubmit(this.state.email)}>
                                <div className="form-header">
                                    <img src={window.test_user} alt="" />
                                </div>
                                <SearchContainer
                                    updateEmail={this.updateEmail}
                                />
                                <input className="form-amount"
                                    type="text"
                                    // pattern="[0-9]*" 
                                    placeholder="$0.00"
                                    onChange={this.update('amount')}
                                    // onChange={this.handleChange}
                                    // value={this.state.value}
                                />
                                <input className="note-box-request"
                                    type="text"
                                    placeholder="Add a note"
                                    onChange={this.update('note')}
                                />
                                <div className="form-message-container">
                                    <div className="message">
                                        Are you sure you want REQUEST payment? There are no take-backs!
                                    </div>
                                </div>
                                <div className="request-button">
                                    <input
                                        type="submit"
                                        className="continue-Btn"
                                        value="Request from Pal"
                                    // onClick={() => this.props.createPayment(this.props.payments.id)}
                                    />
                                </div>
                            </form>
                            <div className="cancel-link">
                                <Link className="cancel-text" to="/myaccount">Cancel</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RequestForm;