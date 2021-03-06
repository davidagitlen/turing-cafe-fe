import React, { Component } from 'react';
// import { fetchReservations } from '../util/apiCalls.js'; 
import Cards from '../Cards/Cards';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {

  fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(reservations => this.setState({ reservations }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>
        Turing Cafe Reservations
        </h1>
        <div className='resy-form'>
        </div>
        <div className='resy-container'>
          <Cards cardsArray= {this.state.reservations} /> 
        </div>
      </div>
    )
  }
}

export default App;
