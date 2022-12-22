import { useState, useEffect } from "react";
import PokeCard from "./components/PokeCard/PokeCard";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";

const App = () => {
  console.log("render");

  const [searchString, setSearchString] = useState("a"); //[value, setValue]
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState(pokemon)
  // useState Flow
  // console.log({searchString})

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
      );
      const data = await response.json();
      setPokemon(data['results'])
    };
    fetchPokemon()
  }, [])

  // useEffect for each time our pokemon or searchString changes
  useEffect(() => {
    const filteredPokemonEffect = pokemon.filter((poke) => {
      return poke.name.includes(searchString);
    })
    setFilteredPokemon(filteredPokemonEffect)
  }, [pokemon, searchString])

  const onSearchChange = (event) => {
    const search_string = event.target.value.toLowerCase();
    setSearchString(search_string);
  };

  return (
    <div className="App">
      <h1 className="app-title">Thieves Pokemon Finder</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <PokeCard pokemon={filteredPokemon} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       pokemon: [],
//       search_string: "",
//     };
//   }

//   async componentDidMount() {
//     const response = await fetch(
//       "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
//     );
//     const data = await response.json();
//     this.setState(() => {
//       return { pokemon: data["results"] };
//     });
//   }

//   onSearchChange = (event) => {
//     const search_string = event.target.value.toLowerCase();

//     this.setState(() => {
//       return { search_string: search_string };
//     });
//   };

//   render() {
//     // Destructuring
//     const { pokemon, search_string } = this.state;
//     const { onSearchChange } = this;

//     // Filtering
//     const filtered_pokemon = pokemon.filter((poke) => {
//       return poke.name.includes(search_string);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Thieves Pokemon Finder</h1>
//         <SearchBox onSearchChange={onSearchChange} />
//         <PokeCard pokemon={filtered_pokemon} />
//       </div>
//     );
//   }
// }

export default App;
