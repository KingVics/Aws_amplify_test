import React, { Component } from 'react'
import './footer.css'


class Footer extends Component {

    render() {

        return (
                    <div className="footer-container">
                        <footer className="footer-style"> 
                            <div className="row">
                                <div className="col- col-sm-4">
                                 <p>Terms and Condition</p>

                                </div>
                                <div className="col- col-sm-4">
                                 <p>Privacy</p>

                                </div>
                                <div className="col- col-sm-4">
                                 <p>Follow us on socials</p>
                                 

                                </div>
                            </div>
                        </footer>
                    </div>
               )
    }
}

export default Footer;