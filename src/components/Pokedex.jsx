import React from 'react'
import Pokemon from './Pokemon'
import Pagination from './Pagination'

function Pokedex(props) {
    const { pokemons, loading, page, totalPages, setPage } = props
    const onLeftClickHandler = ()=>{
        if (page > 0 ){
            setPage(page-1)
        }
    }
    const onRightClickHandler = ()=>{
        if(page+1 !== totalPages ){
            setPage(page+1)
        }
    }

    return (
        <div>
            <div className='pokedex-header'>
                <h1>Pokedex</h1>
               <Pagination
               setPage={setPage}
               page={page+1}
               totalPages={totalPages} 
               onLeftClick={onLeftClickHandler}
               onRightClick={onRightClickHandler}
               />
            </div>
            {loading ? (
            <div>Carregando...</div>
            ) : (
                <div className='pokedex-grid'>
                    {pokemons.map((pokemon, index)=>{
                        return(
                           <Pokemon key={index} pokemon={pokemon}/>
                        )
                    
                    })}
                </div>
                )}
        </div>
    )
}

export default Pokedex;