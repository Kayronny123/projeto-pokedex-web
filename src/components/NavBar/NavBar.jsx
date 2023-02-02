import React from 'react'
import { Searchbar } from '../Searchbar'

export const NavBar = () => {
  const logoImg= "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
  
  return (
    <nav>
    <div>
    
      <img
      alt='pokeapi'
      src={logoImg}
      className='navbar-img'
      />
    </div>
    </nav>
  )
}
