import { Component } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';
import PokeCard from './components/PokeCard/PokeCard';

class App extends Component {
  constructor(){
    super()

    this.state = {
      'pokemon': [],
      search_string: ''
    }
  }

  async componentDidMount() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
    const data = await response.json()
    this.setState(() => {
      return (
        {
          'pokemon' : data['results']
        }
      )
    })
  }

  onSearchChange = (event) => {
    const search_string = event.target.value

    this.setState(() => {
        return (
            {
                search_string: search_string
            }
        )
    })
  }

  render() {
    // Destructuring
    const { pokemon, search_string } = this.state
    const { onSearchChange } = this

    // Filtering
    const filtered_pokemon = pokemon.filter((poke) => {
        return (
            poke.name.includes(search_string)
        )
    })
    
    return (
      <div className="App">
        <h2 className='app-title'>Thieves Pokemon Finder</h2>
        <SearchBox onSearchChange={onSearchChange}/>
        <PokeCard pokemon={filtered_pokemon}/>
      </div>
    );
  }
}

export default App;
