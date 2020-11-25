import React from 'react';

 const FooterLinks = () => {

    const linkedIn = "https://www.linkedin.com/in/trivta/"
    const gitHub = "https://github.com/iamtreetop"
    const angelList = "https://angel.co/u/trivta"

    return (
        <>
            <div className='footer'>
                <div className='icons-wrapper'>
                    <div className='icons-container'>
                        <div className='icon'>
                            <a href={linkedIn} target="_blank" className="footer-links">
                                <img src={window.linkedIn} alt="" />
                            </a>
                        </div>
                        <div className='icon'>
                            <a href={gitHub} target="_blank" className="footer-links">
                                <img src={window.gitHub} alt="" />
                            </a>
                        </div>
                        <div className='icon'>
                            <a href={angelList} target="_blank" className="footer-links">
                                <img src={window.angelList} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterLinks;