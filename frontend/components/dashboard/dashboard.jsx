import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedHeader: 'payments',
            balance: this.props.user.balance
        }

        this.handleClick = this.handleClick.bind(this);
        this.changeHeaderToRequest = this.changeHeaderToRequest.bind(this);
        this.changeHeaderToPayment = this.changeHeaderToPayment.bind(this);
        this.updateBalance = this.updateBalance.bind(this);
    }

    
    componentDidMount(){
         // this.props.user {id: 9, email: "LisaREALG@noblecheetah.io", balance: 1006}
        this.props.fetchUsers();
        this.props.fetchPayments(this.props.user.id);
        this.props.fetchRequests(this.props.user.id);
    }

    updateBalance(balance){
        // debugger
        this.setState({
            balance: this.state.balance + parseInt(balance)
        })
    }

    handleClick() {
        this.props.logout()
            .then(() => this.props.history.push("/login"))
    }

    changeHeaderToRequest() {
        this.setState({selectedHeader: "requests"})
    }

    changeHeaderToPayment() {
        this.setState({selectedHeader: "payments"})
    }

    render() {
        // debugger
        let allUsers = this.props.users;
        if (Object.values(allUsers).length <= 1) return null

        let activityList;
        if (this.state.selectedHeader === "payments"){
            activityList = this.props.payments.map(
                (payment, idx) => {
                    return (
                        <li key={idx} className="payment-list-items">
                            {/* You sent {payment.amount} to {payment.payee_id} */}
                            <div className="payment-list-header">
                                <div className="payment-user">{allUsers[payment.payee_id].email}</div>
                                <div className="payment-amount">- ${payment.amount}</div>
                            </div>
                            <div className="payment-date">{payment.date}</div>
                            <div className="payment-note">"{payment.note}"</div>
                        </li>
                    )
                }
            )
        } else {
            activityList = this.props.requests.map(
                (request, idx) => {
                    return (
                    <>
                        <li 
                            onClick={() => this.props.openModal('request', request.id, this.updateBalance)}
                            key={idx} 
                            className="request-list-items">
                            <div className="request-list-header">
                                <div className="request-user">{allUsers[request.requestee_id].email}</div>
                                <div className="request-amount">+ ${request.amount}</div>
                            </div>
                            <div className="request-list-body">
                                <div className="request-body-items">
                                    <div className="request-date">{request.date}</div>
                                    <div className="request-note">"{request.note}"</div>
                                </div>
                            </div>
                        </li>
                        {/* <button>Delete Request</button> */}
                    </>
                    )
                }
            )
        }
            
        // const editForm = (
        //     <>
        //         <div>
        //             <button 
        //                 onClick={() => this.props.openModal('request')}
        //                 className="sidebar-channel-items">
        //             </button>
        //         </div>
        //     </>
        // );

        if (this.props.user) {

            return (
                <div className="dashboard">
                    <div className="dashboard-content-container">
                        <section className="left-container">
                            <div className="greeting-container">
                                <p className="greeting-message">Welcome, {this.props.user.email} </p>
                            </div>
                            <div className="balance-container">
                                <h3 className="balance-header-message">SendPal Balance</h3>
                                {/* <div className="overflow-image">
                                    <button className="three-dots">* * *</button>
                                </div> */}
                                <span className="currency-balance">${this.state.balance}</span>
                                <span className="currency-balance-message">Available in your SendPal Cash Account</span>
                                <button className="pay-btn">
                                    <Link className="pay-link" to="/myaccount/pay">Transfer Money</Link>
                                </button>
                            </div>
                            {/* <div>
                                {requestList}
                            </div> */}
                        </section>

                        <section className="right-container">
                            <div className="transaction-container">
                                <ul className="transaction-Btns">
                                    <div className="quicklink-btns">
                                        <button id="transaction-Btn">
                                            <Link to="/myaccount/pay" ><img id="transaction-Btn-icon1" src={window.send_icon} alt=""/></Link>
                                        </button>
                                        <div id="quicklinks">Send</div>
                                    </div>
                                    <div className="quicklink-btns">
                                        <button id="transaction-Btn">
                                            <Link to="/myaccount/request" ><img id="transaction-Btn-icon2" src={window.request_icon} alt=""/></Link>
                                        </button>
                                        <div id="quicklinks">Request</div>
                                    </div>
                                </ul>
                            </div>

                            {/* <div className="pals-container">
                                <h3 className="pals-header">Send Again</h3>
                                <ul className="pals-list">
                                    <div className="pals-details">
                                        <button id="pals">V W</button>
                                        <p>venuswilliams</p>
                                    </div>
                                    <div className="pals-details">
                                        <button id="pals">M J</button>
                                        <p>michaeljordan</p>
                                    </div>
                                    <div className="pals-details">
                                        <button id="pals">L J</button>
                                        <p>lebronjames</p>
                                    </div>
                                    <div className="pals-details">
                                        <button id="pals">I C</button>
                                        <p>icecube</p>
                                    </div>
                                </ul>
                            </div> */}

                            <div className="activities-container">
                                <div className="toggle-activity">
                                    <h3 className="activities-header" onClick={this.changeHeaderToPayment} >Payments</h3>
                                    <h3 id="activities-separator"> | </h3>
                                    <h3 className="activities-header" onClick={this.changeHeaderToRequest} >Requests</h3>
                                </div>
                                <ul className="activity-list-items">
                                    {activityList}
                                </ul>
                            </div>
                        </section>

                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

export default Dashboard;