import React from 'react'
import './header.css'

// function Nav(props) {
  
//     return (
//         <div className="Nav-container">
//               <nav className="navBar">
//                 <ul className="navBar-link">
//                     <li style={{color: !props.link.home && "#343"}}>{props.link.home}</li>
//                     <li>{props.link.product}</li>
//                     <li>{props.link.service}</li>
//                     <li>{props.link.about}</li>
//                     <li>{props.link.contact}</li>
//                 </ul>
//             </nav>
//         </div>

//     ) 
// }

class Nav extends React.Component {
    constructor () {
        super()
        this.state = {
            count: 0
        }
    }
 
    render() {
        return (
            <div className="Nav-container">
            <nav className="navBar">
              <ul className="navBar-link">
                  <li style={{color: !this.props.link.home && "#343"}}>{this.props.link.home}</li>
                  <li>{this.props.link.product}</li>
                  <li>{this.props.link.service}</li>
                  <li>{this.props.link.about}</li>
                  <li>{this.props.link.contact}</li>
                  
              </ul>
          </nav>
        </div>
        )
    }
}

export default Nav;