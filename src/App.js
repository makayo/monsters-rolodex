import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { MonsterDetail } from './components/monster-detail/monster-detail.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      selectedMonster: null
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  handleCardClick = (monster) => {
    this.setState({ selectedMonster: monster });
  }

  handleCloseDetail = () => {
    this.setState({ selectedMonster: null });
  }

  render() {
    const { monsters, searchField, selectedMonster } = this.state;
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
      <div className='App'>
        <h1> Monsters Rolodex </h1>
        < SearchBox
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} onClick={this.handleCardClick} />
        {selectedMonster && (
          <MonsterDetail monster={selectedMonster} onBack={this.handleCloseDetail} />
        )}
      </div>
    );
  }
}

export default App;
