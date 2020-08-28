import React, { Component } from 'react'
import './form.css'
import FormComponent from './formComponent'




class Form extends Component {
    constructor() {
        super()

        this.state = {
            firstName: "",
            lastName: "",
            phoneNumber: null,
            gender: "",
            location: "",
            age: "",
            front: false,
            back: false,
            full: false
            
           
                
            
    
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this);
    }

  

    handleChange = event => {
        event.preventDefault()
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({
                [name]: checked
            })
       :
            this.setState({
                [name]: value
            })
    }

      handleClick = (e) => {
        alert("Hello, " + this.state.firstName + " " + this.state.lastName + ".  ")
        e.preventDefault();
       
    }

    render () {
        return (
                <FormComponent  
                    handleClick={this.handleClick}
                    handleChange={this.handleChange}
                    detail={this.state}
                />
        )
    }
}


export default Form;