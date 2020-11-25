import React from "react";
import DashboardContainer from "./dashboard/dashboard_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import SendPaymentContainer from "./payments/send_payment_container.jsx";
import RequestPaymentContainer from "./requests/request_payment_container";
import PaymentShowContainer from "./payments/payment_show_container";
import RequestShowContainer from "./requests/request_show_container";
import EditRequestFormContainer from "./requests/edit_request_form_container";
import Modal from "../components/modal/modal";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from ".././util/route_util"
import Splash from "./splash"
import FooterLinks from "./footer"
import NavBar from "./navbar/navbar_container"

const App = () => {
    return (
    <div className="app-main">
        <Modal/>
        <header>
            <ProtectedRoute exact path="/myaccount" component={NavBar}/>
            <ProtectedRoute exact path="/myaccount/pay" component={NavBar}/>
            <ProtectedRoute exact path="/myaccount/request" component={NavBar}/>
            <ProtectedRoute exact path="/confirmation/:paymentId" component={NavBar}/>
            <ProtectedRoute exact path="/req_confirmation/:requestId" component={NavBar}/>
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path="/signup" component={SignupFormContainer}/>
            <Route path="/myaccount/pay" component={SendPaymentContainer}/>
            <Route path="/myaccount/request" component={RequestPaymentContainer}/>
            {/* <Route path="/myaccount/edit_request" component={EditRequestFormContainer} /> */}
            <Route path="/confirmation/:paymentId" component={PaymentShowContainer} />
            <Route path="/req_confirmation/:requestId" component={RequestShowContainer} />
            <ProtectedRoute exact path="/myaccount" component={DashboardContainer}/>
            <AuthRoute exact path="/" component={Splash} />
            <Redirect to="/"/>
        </Switch>
        <footer>
            <FooterLinks />
        </footer>
    </div>
    )
};



export default App;