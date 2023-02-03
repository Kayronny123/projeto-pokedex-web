import React from 'react'

function Pokemon(props) {

    const {pokemon}=props
    const onHeartClick= ()=>{
        console.log('favorito')
    }

  return (
    <div className='pokemon-card'>
        <div className='pokemon-image-container'>
            <img alt={pokemon.name} src={pokemon.sprites.front_default} className='pokemon-image' />
        </div>
        <div className='card-body'>
            <div className='card-top'>
            <h3>{pokemon.name}</h3>
            <div>{pokemon.id}</div>
            </div>
            <div className='card-botton'>
            <div className='pokemon-type'>
            {pokemon.types.map((type, index)=>{
                return(
                    <div key={index} className='pokemon-type-text'>{type.type.name}</div>
                )
            })}
            </div>

            </div>
            <button className='pokemon-heart-btn' onClick={onHeartClick}>
                Favorite
            </button>
        </div>
    </div>
  )
}

export default Pokemon