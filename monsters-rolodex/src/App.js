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

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({searchField:e.target.value});
  }

  render(){
    const { monsters, searchField } = this.state
    //equal to 
    //const monsters = this.state.monsters
    //const searchField = this.state.searchField
    const filteredMonsters = monsters.filter(monster=>
    monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )

    console.log({searchField})
    return (
      <div className="App">
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
