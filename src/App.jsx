import React, { useState, useEffect } from 'react'
import { NavBar } from './components/NavBar/NavBar'
import './App.css'
import { Searchbar } from './components/Searchbar'
import { getPokemonData, getPokemons, searchPokemon } from './api'
import axios from 'axios'
import Pokedex from './components/Pokedex'
function App() {
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
 const fetchPokemons = async()=>{
    try {
      setLoading(true)
      const data = await getPokemons()
      const promises = data.results.map(async(pokemon)=>{
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
    } catch (error) {
      console.log('fetchpokemons', error)
    }  
 }

  useEffect(() => {
    console.log('carregou fetch')
    fetchPokemons();
  }, []);
  

  return (
    <div>
  <NavBar/>
  <Searchbar />
  <Pokedex  pokemons={pokemons} loading={loading}  />
    </div>
  )
}

export default App
