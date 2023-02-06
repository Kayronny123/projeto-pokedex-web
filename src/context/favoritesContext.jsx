import React from 'react'

const FavoriteContext = React.createContext({
    favoritePokemons: [],
    updateFavoritesPokemons: (id)=> null
})
export const FavoritePovider = FavoriteContext.Provider;

export default FavoriteContext;