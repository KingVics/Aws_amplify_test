import React, { Component } from 'react'
import './main.css'
import '../components/12.jpg'

// export default function Main(props) {
    
//     return(
//         <div className="container container-style"> 
//             <main className="product-container">
//                 <div className="row product">
//                     <div className="col- col-lg-4">
//                      <div  className="card style">
//                         <div  className="card-body card">
//                          <h5  className="card-title">{props.card.title}</h5>
//                              <p  className="card-text">{props.card.para}</p>
//                              <a href={props.card.link}  className="btn btn-primary">{props.card.linktitle}</a>
//                          </div>
//                          </div>
//                     </div> 
//                 </div>   
//             </main>
//         </div>
//     )
// }

function onClick(e, m) {
    alert("Clicked")
    e.preventDefault();
}

class Main extends Component {
    constructor() {
        super()

        this.state = {
            count: 0,
            character: {}
        }

        this.onClick = this.onClick.bind(this)
        this.click = this.click.bind(this)
    }


    componentDidMount() {
        fetch("https://swapi.dev/api/people/1")
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        character: data
                    })
                  
                })
    }

    
     
    
  onClick(e) {
   
    e.preventDefault();
    this.setState((prevState) => {
        return {
            count: prevState.count + 1
        }
    })
}

click(e) {
    e.preventDefault();
    this.setState((change) => {
        return {
            count: change.count - 1
        }
    })
}
    
render() {
    console.log(this.state.character)
        return (
            <div className="container">  
                <div className="row card-style">
                    <div className="col- col-lg-4">
                         <div  className="card">
                             <div  className="card-body card">
                                 <h5  className="card-title">{this.state.character.name}</h5>
                                  <p  className="card-text">{this.state.character.gender}</p>
                                 <div className="image-api"><img src={this.props.cardprops.link}/></div>
                                 {/* <a href={this.props.cardprops.link} onClick={this.onClick} className="btn btn-primary">{this.props.cardprops.linktitle}</a> */}
                                {/* <a href={this.props.cardprops.link} onClick={this.click} className="btn btn-primary">{this.props.cardprops.linktitle}</a> */}
                            </div>
                        </div>
                    </div> 
                    <div className="col- col-lg-4">
                         <div  className="card">
                             <div  className="card-body card">
                                 <h5  className="card-title">{this.state.character.name}</h5>
                                  <p  className="card-text">{this.state.character.gender}</p>
                                 <div className="image-api"><img src={this.props.cardprops.link}/></div>
                                 {/* <a href={this.props.cardprops.link} onClick={this.onClick} className="btn btn-primary">{this.props.cardprops.linktitle}</a>
                                <a href={this.props.cardprops.link} onClick={this.click} className="btn btn-primary">{this.props.cardprops.linktitle}</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col- col-lg-4">
                         <div  className="card">
                             <div  className="card-body card">
                                 <h5  className="card-title">{this.props.cardprops.title}</h5>
                                  <p  className="card-text">{this.props.cardprops.para}</p>
                                 <div>{this.state.count}</div>
                                 <a href={this.props.cardprops.link} onClick={this.onClick} className="btn btn-primary">{this.props.cardprops.linktitle}</a>
                                <a href={this.props.cardprops.link} onClick={this.click} className="btn btn-primary">{this.props.cardprops.linktitle}</a>
                            </div>
                        </div>
                    </div>
                </div>
             </div>  
                  
        )
    }
}

export default Main;