import React from 'react'
import left from '../assets/seta-esquerda.png'
import right from '../assets/seta-direita.png'

function Pagination(props) {
  const {page, totalPages, onLeftClick, onRightClick}= props
    return (
    <div className='pagination-container'>
        <button onClick={onLeftClick}><img alt='esquerda' src={left}  style={{width: '30px', height: '20px',}}/> 
        </button>
        <div>{page} de {totalPages} </div>
        <button onClick={onRightClick}><img alt='direita' src={right}  style={{width: '30px', height: '20px' }}/> </button>
    </div>
  )
}

export default Pagination