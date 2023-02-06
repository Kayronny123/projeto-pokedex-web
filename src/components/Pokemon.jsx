import React, {useContext} from 'react'
import heartfavred from '../assets/heart-fav.png'
import heartfavblack from '../assets/heart-fav-black.png'
import FavoriteContext from '../context/favoritesContext'

function Pokemon(props) {

    const {favoritePokemons,updateFavoritesPokemons }=useContext(FavoriteContext)


    const {pokemon}=props
    const onHeartClick= ()=>{
        updateFavoritesPokemons(pokemon.name)
    }
    const iconHeart = favoritePokemons.includes(pokemon.name) ? heartfavred : heartfavblack;

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
            <button className='pokemon-heart-btn' onClick={onHeartClick} style={{width: '30px', height: '30px',}}>
                   <img alt='favotiro' src={iconHeart} style={{width: '25px', height: '25px',}} />
            </button>
        </div>
    </div>
  )
}

export default Pokemon