import React, { Component } from 'react'


class Button extends Component {
    render () {
        return (
            <div>
            <div className="button-container">
                   <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                      Learn More
                   </button>
               </div>
       </div>
        )
    }
}

export default Button;