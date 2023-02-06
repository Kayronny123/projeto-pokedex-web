import React, { useState } from 'react';

const Searchbar = (props) => {

    const [search, setSearch] = useState('dito')
    const {onSearchHandler} = props

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0) {
            onSearchHandler(undefined)
        }
    };
    const onButtonClickHandler = () => {
        onSearchHandler(search)
    };
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
export default Searchbar;