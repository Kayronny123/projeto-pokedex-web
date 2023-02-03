import React from 'react'

function Pagination(props) {
  const {page, totalPages, onLeftClick, onRightClick}= props
    return (
    <div className='pagination-container'>
        <button onClick={onLeftClick}></button>
        <div></div>
        <button onClick={onRightClick}></button>
    </div>
  )
}

export default Pagination