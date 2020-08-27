import React, { Component } from 'react'




class Form extends Component {
    constructor() {
        super()

        this.state = {}
    }
    render () {
        return (
                <div>
                    <form>
                        <input type="text"  required/>
                        <input type="password" required/>
                        <input type="submit" />
                    </form>
                </div>
        )
    }
}


export default Form;