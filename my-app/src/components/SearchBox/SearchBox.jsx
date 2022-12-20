import React, { Component } from "react";

export default class SearchBox extends Component {
  constructor() {
    super();

    this.state = {
      search_string: "",
    };
  }

  onSearchChange = (event) => {
    const search_string = event.target.value.toLowerCase()

    this.setState(() => {
        return {search_string: search_string}
    })
  };

  render() {

    console.log(this.props.pokemon)
    // Destructuring
    const { search_string } = this.state
    // this.props.pokemon
    const { pokemon } = this.props
    const { onSearchChange } = this

    // Filtering
    const filtered_pokemon = pokemon.filter((poke) => {
        return (
            poke.name.includes(search_string)
        )
    })

    return (

        <div>
        <input
          className="search-box"
          type="search"
          placeholder="Search Pokemon"
          onChange={onSearchChange}
        />
        {filtered_pokemon.map((poke) => {
            return (
                <h1 key={poke.name}>{poke.name}</h1>
            )
        })}
      </div>
    );
  }
}
