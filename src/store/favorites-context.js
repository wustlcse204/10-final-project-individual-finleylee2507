import { createContext,useState } from "react";

//initializes a react context 
//source: https://reactjs.org/docs/context.html 
//technically don't need any values but easier for vscode autocompletion 
export const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite:(favoriteMeetup)=>{},
    removeFavorite:(meetupId)=>{},
    itemIsFavorite:(meetupId)=>{}
});//returns a react component 

//main react wrapper class 
export const FavoritesContextProvider=(props) =>{
    const [userFavorites,setUserFavorites]=useState([])

    const addFavoriteHandler =(favoriteMeetup)=>{
        setUserFavorites((prevUserFavorites)=>{ //BETTER WAY OF UPDATING STATES (appending on previous)
            return prevUserFavorites.concat(favoriteMeetup);
        })
    }

    const removeFavoriteHandler=(meetupId)=>{
        setUserFavorites(prevUserFavorites=>{
            return prevUserFavorites.filter(meetup=>meetup.id!==meetupId);
        })
    }

    const itemIsFavoriteHandler=(meetupId)=>{
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
        return userFavorites.some(meetup=>meetup.id===meetupId)
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

