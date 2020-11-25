import React from 'react';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.props.logout()
            .then(() => this.props.history.push("/login"))
    }

    render (){

        if (this.props.user) {
        
            return (
                <>
                    <div className="nav-main">
                        <section className="nav-logo" >
                            <Link to="/">
                                <img className='senpal-logo' src={window.sendpalLogo} alt="" />
                            </Link>
                        </section>

                        <nav className="nav-section">
                            <ul className="nav-list">
                                <Link to="/myaccount/pay" className="nav-link">Send</Link>
                                <Link to="/myaccount/request" className="nav-link">Request</Link>
                                {/* <li to="/myaccount" className="nav-link-header">REQUEST</li> */}
                            </ul>
                        </nav>
                        
                        <div className="nav-buttons">
                            <button 
                                className="nav-button" 
                                id="logout"
                                onClick={this.handleClick}
                                >Log out</button>
                        </div>
                    </div>
                    
                </>
            )
        } else {
            return null
        }
    }
};

export default NavBar;