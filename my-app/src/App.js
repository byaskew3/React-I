import { Component } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      'pokemon': []
    }
  }

  async componentDidMount() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
    const data = await response.json()
    this.setState(
      () => {
        return ({'pokemon': data['results']})
      })
  }

  render(){
    return (
      <div className="App">
        <SearchBox pokemon={this.state.pokemon}/>
      </div>
    );
  }
}

export default App;
