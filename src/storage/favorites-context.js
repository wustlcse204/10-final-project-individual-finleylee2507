import { createContext,useState } from "react";
import usePersistedState from "./customHooks"; 

//initializes a react context 
//source: https://reactjs.org/docs/context.html 
//technically don't need any values but easier for vscode autocompletion 
export const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite:(favoriteSet)=>{},
    removeFavorite:(setId)=>{},
    itemIsFavorite:(setId)=>{}
});//returns a react component 

//main react wrapper class 
export const FavoritesContextProvider=(props) =>{
    const [userFavorites,setUserFavorites]=usePersistedState("favorites",[]);

    const addFavoriteHandler =(favoriteSet)=>{
        setUserFavorites((prevUserFavorites)=>{ //BETTER WAY OF UPDATING STATES (appending on previous)
            return prevUserFavorites.concat(favoriteSet);
        })
    }

    const removeFavoriteHandler=(setId)=>{
        setUserFavorites(prevUserFavorites=>{
            return prevUserFavorites.filter(set=>set.id!==setId);
        })
    }

    const itemIsFavoriteHandler=(setId)=>{
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
        return userFavorites.some(set=>set.id===setId)
    }

    const context={
        favorites:userFavorites,
        totalFavorites:userFavorites.length,
        addFavorite:addFavoriteHandler,
        removeFavorite:removeFavoriteHandler,
        itemIsFavorite:itemIsFavoriteHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

