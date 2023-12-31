import React, {Component} from 'react';
import { CardList } from './components/card-list/Card-list';
import './App.css';
import SearchBox from './components/search-box/SearchBox';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
    
  }
  handleChange = e => this.setState({searchField: e.target.value});


  render() {

    const { monsters, searchField  } = this.state;
    const filteredMonsters = monsters.filter(monster=> monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='Search monsters' handleChange={this.handleChange } />
        <CardList monsters={filteredMonsters}></CardList>
    </div>
    )
  }
}
 
export default App;
