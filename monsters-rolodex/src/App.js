import React from 'react';
import { Component } from 'react'
import './App.css';
import {Cardlist} from 
'./components/card-list/card-list.component.jsx'
import {SearchBox} from './components/search-box/search-box.component.jsx'


class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField:''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then(users => this.setState({ monsters: users }))
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
      <SearchBox
        placeholder = 'search monsters'
        handleChange = {e => this.setState({searchField:e.target.value})}/>
      <Cardlist monsters={filteredMonsters}>
      </Cardlist>  
      </div>
    );

  };

}


export default App;
