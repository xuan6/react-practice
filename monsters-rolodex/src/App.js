import React from 'react';
import { Component } from 'react'
import './App.css';
import {Cardlist} from './components/card-list/card-list.component.jsx'


class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters:[]
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  render(){
    return (
      <div className="App">
      <Cardlist monsters={this.state.monsters}>
      </Cardlist>  
      </div>
    );

  };

}


export default App;
