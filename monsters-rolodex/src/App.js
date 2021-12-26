import React from 'react';
import { Component } from 'react'
import './App.css';
import {Cardlist} from './components/card-list/card-list.component.jsx'
import {SearchBox} from './components/search-box/search-box.component.jsx'


class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField:''
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({searchField:e.target.value});
    //use arrow function to bind the context to the place where it was defined at the first place
    //euqal to this.handleChange = this.handleChange.bind-this-
  }

  render(){
    const { monsters, searchField } = this.state
    //equal to 
    //const monsters = this.state.monsters
    //const searchField = this.state.searchField
    const filteredMonsters = monsters.filter(monster=>
    monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )

    return (
      <div className="App">
      <h1> Monsters Rolodex </h1>
      <SearchBox
        placeholder = 'search monsters'
        handleChange = {this.handleChange}/>
      <Cardlist monsters={filteredMonsters}>
      </Cardlist>  
      </div>
    );

  };

}


export default App;
