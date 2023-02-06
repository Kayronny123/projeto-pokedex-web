import React, { useState } from 'react'
import { searchPokemon } from '../api'

export const Searchbar = () => {

    const [search, setSearch] = useState('dito')
    
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }
    const onButtonClickHandler = () => {
        onSearchHandler(search)

    }
    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)

    }

    return (
        <div className='searchbar-container'>
            <div className='searchbar'>
                <input placeholder='Buscar pokemon' type="text" onChange={onChangeHandler} />
                <div className='searchbar-btn'>
                    <button onClick={onButtonClickHandler}>Buscar</button>
                </div>
            </div>

        </div>
    )
}
