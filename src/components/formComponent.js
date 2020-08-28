import React from 'react'


export default function FormComponent(props) {
    return (
        <div>
        <section className="form-style">
            <h2 className="form-header">Please fill in your details: </h2>
            <form onSubmit={props.handleClick}>
                <input type="text" 
                    value={props.detail.firstName} 
                    name="firstName" placeholder="First Name" 
                    onChange={props.handleChange}
                    className="inputFirst"
                    required
                />
                <br />

                <input type="text" 
                    value={props.detail.lastName} 
                    name="lastName" placeholder="Last Name"
                    onChange={props.handleChange}
                    className="inputLast" 
                    required
                />
                <br />

                <input type="text" 
                    value={props.detail.phoneNumber} 
                    name="phoneNumber" placeholder="Phone Number"
                    onChange={props.handleChange}
                    className="inputLast" 
                    required
                />

                <br />

                <input type="text" 
                    value={props.detail.age} 
                    name="age" placeholder="Age"
                    onChange={props.handleChange}
                    className="inputLast" 
                    required
                />

                <br />
              
                <label>
                 <input type="radio" 
                    name="gender"
                    value="male"
                    checked={props.detail.gender === "male"}
                    onChange={props.handleChange}
                
                 /> male
                </label>

                <br />

                <label>
                <input type="radio" 
                    name="gender"
                    value="female"
                    checked={props.detail.gender === "female"}
                    onChange={props.handleChange}
                
                 /> female
                </label>
               
                <br />

                <select value={props.detail.location} name="location" onChange={props.handleChange}>
                    <option value="">-- Please select an option --</option>
                    <option value="nigeria">Nigeria</option>
                    <option value="united state">United State</option>
                    <option value="england">England</option>
                    <option value="ghana">Ghana</option>
                    <option value="france">France</option>
                    <option value="germany">Germany</option>
                </select>

                <br />
                
                <h4>Where do you find ourself? </h4>
                <label>

                    <input type="checkbox"
                        name="front"
                        checked={props.detail.front}
                        onChange={props.handleChange}

                    /> front-end

                </label>

                <br />

                <label>

                    <input type="checkbox"
                        name="back"
                        checked={props.detail.back}
                        onChange={props.handleChange}

                    /> back-end

                </label>

                <br />

                <label>

                    <input type="checkbox"
                        name="full"
                        checked={props.detail.full}
                        onChange={props.handleChange}

                    /> full-stack

                </label>
              

                <br />
                <button  className="submit">Submit</button>
            </form>
        </section>          
    </div>



    )
}