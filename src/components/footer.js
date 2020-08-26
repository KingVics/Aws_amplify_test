import React, { Component } from 'react'
import './footer.css'
import logo from './asset/logo.svg'
import facebook from './asset/facebook.svg'
import twitter from './asset/twitter.svg'


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
                                 <img src={logo}  className="App-logo"/>
                                 <img src={facebook}  className="App-logo2"/>
                                 <img src={twitter}  className="App-logo3"/>
                                
                                </div>
                            </div>
                        </footer>
                        <div>
                            <p>Copyright</p>
                        </div>
                    </div>
               )
    }
}

export default Footer;