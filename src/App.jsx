import React, { useState, useEffect } from 'react'
import { NavBar } from './components/NavBar/NavBar'
import './App.css'
import { Searchbar } from './components/Searchbar'
import { getPokemonData, getPokemons, searchPokemon } from './api'
import axios from 'axios'
import Pokedex from './components/Pokedex'
import { FavoritePovider } from './context/favoritesContext'

const favoriteKey = 'f'
function App() {
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [favorites, setFavorites] = useState([])
  const itensPerPage = 25

 const fetchPokemons = async()=>{
    try {
      setLoading(true)
      const data = await getPokemons(itensPerPage, itensPerPage * page)

      const promises = data.results.map(async(pokemon)=>{
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
      setTotalPages(Math.ceil(data.count / itensPerPage) )
    } catch (error) {
      console.log('fetchpokemons', error)
    }  
 }

  useEffect(() => {
    console.log('carregou fetch')
    fetchPokemons();
  }, [page]);
  
  const loadFavoritePokemons = ()=>{
    const pokemons = JSON.parse(window.localStorage.getItem(favoriteKey)) || []
    setFavorites(pokemons)
  }
  useEffect(() => {
    console.log('carregou loadFavorite')
    loadFavoritePokemons()
  }, []);
  
  const updateFavoritesPokemons = (name)=>{
    const updateFavorites = [...favorites]
    const favoriteIndex= favorites.indexOf(name)
    if (favoriteIndex >= 0) {
      updateFavorites.slice(favoriteIndex, 1)
    } else {
      updateFavorites.push(name)
    }
    window.localStorage.setItem(favoriteKey, JSON.stringify(updateFavorites))
    setFavorites(updateFavorites)
  }

  return (
<FavoritePovider value={{favoritePokemons: favorites,
updateFavoritesPokemons: updateFavoritesPokemons
}}>

    <div>
  <NavBar/>
  <Searchbar />
  <Pokedex  pokemons={pokemons} loading={loading} page={page} totalPages={totalPages} setPage={setPage} />
  
    </div>
    </FavoritePovider>
  )
}

export default App
