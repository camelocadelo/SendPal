import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this)
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.history.push("/myaccount"))

        this.setState({
            email: "",
            password: "",
            balance: ""
        });
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }


    // demo signin credit to Erik Thompson aA SF Dec. 20193
    demoLogin(e) {
        e.preventDefault()
        const demo = { email: "demo_user@aa.io", password: "password" }
        const speed = 100;
        if (this.state.email !== demo.email) {
            const inputemail = setInterval(() => {
                if (this.state.email !== demo.email) {
                    const temp = demo.email.slice(0, this.state.email.length + 1);
                    this.setState({ email: temp })
                } else {
                    clearInterval(inputemail);
                    animatePW();
                }
            }, speed)
        }
        const animatePW = () => {
            if (this.state.password !== demo.password) {
                const inputPassword = setInterval(() => {
                    if (this.state.password !== demo.password) {
                        const temp = demo.password.slice(0, this.state.password.length + 1);
                        this.setState({ password: temp });
                    } else {
                        clearInterval(inputPassword);
                        this.props.demoLogin(demo).then(
                            () => {
                                this.props.history.push("/myaccount")
                            })
                    }
                }, speed);
            }
        }
    }


    render(){
        const header = (this.props.formType === "login") ? "Already a Member? Log In." : "Don't have an account? Sign Up Today!"
        
        const otherButton = (this.props.formType === "login") ? (
            <Link to="/signup" >
                signup
            </Link >
        ) : (
            <Link to="/login" >
                login
            </Link >    
        );

        const toggleText = (this.props.formType === "login") ? (
            "login"
        ) : (
            "signup"
        );

        let errors = this.props.errors.map((error, idx) => {
            return <ul key={idx}>{error}</ul>
        })
        
        return (
            <div className="form-main">
                <section className="form-container">
                    <div className="form-header">
                        <div className="contentContainer">
                            <header>
                                <p className="form-header"></p>
                                <Link to="/"><img className="sendpal-logo-long" src={window.sendpal} /></Link>
                            </header>
                            <form onSubmit={this.handleSubmit}>
                                <div className="clearfix">
                                    <div className="formInput">
                                        <div className="formField">
                                            <label className="fieldLabel">Email</label>
                                            <input type="email" 
                                                value={this.state.email}
                                                onChange={this.update('email')} 
                                                placeholder="Email" 
                                            />
                                        </div>
                                    </div>

                                    <div className="formInput">
                                        <div className="formField">
                                            <label className="fieldLabel">Password</label>
                                            <input type="password" 
                                                onChange={this.update('password')}
                                                placeholder="Password"/>
                                        </div>
                                    </div>
                                </div>

                                
                                <div className="actionsSpaced">
                                    <input className="button actionContinue"
                                        type="submit"
                                        value={this.props.formType}
                                        placeholder={toggleText}
                                        >
                                    </input>
                                </div>

                                <div className="orSeparator">
                                    <span>or</span>
                                </div>
                            </form>

                            <button className="button secondary" >{otherButton}</button>
                            <br/>
                            <button className="bTndemo" onClick={this.demoLogin}>Demo</button>
                            <div className="errors">
                                {errors}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


    export default SessionForm;