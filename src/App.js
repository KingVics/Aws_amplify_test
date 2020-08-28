import React, { Component } from 'react';
import Header from './components/header'
import Main from './components/main'
import cards from './components/cards'
import Form from './components/formContainer'
import Footer from './components/footer'



class App extends Component {
     constructor() {
       super()

       this.state = {
         card: cards
       }
     }


   
 
     render() {
        const newCard = this.state.card.map(data => <Main cardprops={data}  key={data.link}/> )
        

        return (

         <div>
           <div>
           <Header />
           </div>
           {newCard} 
           <Form />
           <Footer />
        </div>

        )

     }

    }

export default App;
