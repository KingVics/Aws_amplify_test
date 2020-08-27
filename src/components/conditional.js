import React from 'react'
import Button from './button'
import Modal from './modal'
import Nav from './nav'
import './header.css'



class Conditional extends  React.Component {
    constructor() {
        super()

        this.state = {
            username: "Victor",
            isLoggedIn: true,
            log: "",
            isSignIn: true,
        
           
        }

        if(this.state.isLoggedIn && this.state.isSignIn) {
             this.state.log = "In"
        }

         else {
             this.state.log = "Out"
         }

       
    }
        
   
  

    render () {
        const date = new Date();
       const hour = date.getHours();

    let timefoDay;
    const  style = {
            fontSize: ""
         }

    if(hour < 12 ) {
         timefoDay = "Morning"
         style.color = "#fff"
            
    }  else if(hour >= 12 && hour < 16) {
        timefoDay = "Afternoon"
        style.color = "#333"
        
    }

    else if(hour < 21) {
        timefoDay = "Evening"
        style.color = "#0069d7"
        
    }
        
    else {
         timefoDay="Night"
         style.color = "#f39c12"
    }
    
    let displayText = this.state.isSignIn ? "You're Logged in" : "You're Logged out";

    return (
        
        <div>
            <header className="header-container">
            <div>
                <h1 className="display-4" style={style}>Hello, {this.state.username}. {displayText}! Good {timefoDay}</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron style component for 
                calling extra attention to featured content or information.</p>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            </div>
           <Button />
           <Modal />
           </header> 
        </div>
    )
    }

}

export default Conditional;