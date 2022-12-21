import React, { Component } from 'react'
import './PokeCard.css'

export default class PokeCard extends Component {
  render() {

    // Destructuring Prop
    const { pokemon } = this.props

    return (
      <div className='card-list'>
        {pokemon.map((poke) => {
            const poke_id = poke.url.slice(34, -1)
            return (
                <div className='card-container'>
                    <img alt={`pokemon ${poke.name}`} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${poke_id}.png`}/>
                    <h2>{poke.name}</h2>
                </div>
            )
        })}
      </div>
    )
  }
}
