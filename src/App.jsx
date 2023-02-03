import React, { useState, useEffect } from 'react'
import { NavBar } from './components/NavBar/NavBar'
import './App.css'
import { Searchbar } from './components/Searchbar'
import { getPokemons, searchPokemon } from './api'
import axios from 'axios'
import Pokedex from './components/Pokedex'
function App() {
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
 const fetchPokemons = async()=>{
    try {
      setLoading(true)
      const result = await getPokemons()
      setPokemons(result)
      setLoading(false)
    } catch (error) {
      console.log('fetchpokemons', error)
    }  
 }

  useEffect(() => {
    console.log('carregou')
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
