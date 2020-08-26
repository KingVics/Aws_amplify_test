import React, { Component } from 'react';
import Header from './components/header'
import Main from './components/main'
import cards from './components/cards'



class App extends Component {
     constructor() {
       super()

       this.state = {
         card: cards
       }
     }

     render() {
        const newCard = this.state.card.map(data => <Main cardprops={data}  key={data.link}/> )
        console.log(newCard)

        return (

          <div>
          <Header />
           {newCard} 
         
        </div>

        )

     }

    }

export default App;
