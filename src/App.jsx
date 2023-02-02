import React, { useState } from 'react'
import { NavBar } from './components/NavBar/NavBar'
import './App.css'
import { Searchbar } from './components/Searchbar'
import { searchPokemon } from './api'
import axios from 'axios'
function App() {
 
  

  return (
    <div>
  <NavBar/>
  <Searchbar />
  <div className='App'>

  </div>
    </div>
  )
}

export default App
