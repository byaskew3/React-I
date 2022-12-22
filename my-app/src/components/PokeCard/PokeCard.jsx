import React from 'react'
import './PokeCard.css'

const PokeCard = ({ pokemon }) => {
  return (
    <div className='card-list'>
      {pokemon.map((poke) => {
          const { name } = poke
          const poke_id = poke.url.slice(34, -1)
          
          return (
          <div key={name} className='card-container'>
            <img alt={`pokemon ${name}`} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${poke_id}.png`}/>
            <h1 className='poke-name'>{name}</h1> 
          </div>
          )
      })}
    </div>
  )
}

export default PokeCard
