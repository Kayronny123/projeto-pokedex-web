import React,{useContext} from 'react'
// import { Searchbar } from '../Searchbar'
import heartfav from '../../assets/heart-fav.png'
import FavoriteContext from '../../context/favoritesContext'
export const NavBar = () => {
  const logoImg= "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
 
  const {favoritePokemons}= useContext(FavoriteContext);

  return (
    <nav>
    <div>
    
      <img
      alt='pokeapi'
      src={logoImg}
      className='navbar-img'
      />
    </div>
    <div>
      {favoritePokemons.length}
      <img alt='favorito' src={heartfav} style={{width: '25px', height: '25px',}}  />
    </div>
    </nav>
  )
}
