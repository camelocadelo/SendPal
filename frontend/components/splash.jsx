import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component{

    render(){
        return(
            <>
                <div className='main'>
                    <div className='header'>
                        <div className="header-wrapper">
                            <div className='header-logo'>
                                <Link className='header-logo-a' to="/">
                                    <img className='senpal-logo' src={window.sendpalLogo} alt=""/>
                                </Link>
                            </div>
                            <div className='login-button'>
                                <Link to={`/login`}>
                                        <button className='bTnlogin'> Log In</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='content'>
                        <div className='content-container'>
                            <div className='signup'>
                                <div className="message-container">
                                    <p className='main-message'>Send Your Pals Money.</p>
                                    <p className='sub-message'>Safely. Securely.</p>
                                    <Link to="/signup">
                                        <button className='signup-button'>Sign Up</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='content-image-container'>
                            <img className="homepage-img"/>
                        </div>
                    </div>
                </div>
                <div className="covid">
                    <p className="covid-message">
                        SendPal is a demonstration web application clone of PayPal. Thank you for visiting.
                    </p>
                </div>
            </>
        )            
    }
}

export default Splash;