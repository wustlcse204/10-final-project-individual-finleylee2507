import React from 'react'
import { useContext } from 'react'

import { FavoritesContext } from '../store/favorites-context'
import StudySetList from '../components/StudySets/StudySetList'

//note the elements are not permernant, meaning that if we refresh that page, they're gone. 
//because we didn't store the favorites in a database or local storage.
//TODO: try storing it in server  
const FavoritesPage = () => {

    const favoritesCtx=useContext(FavoritesContext);
    let content;

    if(favoritesCtx.totalFavorites===0){
        content=<p>You got no favorites yet. Start adding some?</p>
    }
    else{
        content=<StudySetList studysets={favoritesCtx.favorites}></StudySetList>
    }
    return (
       <section>

           <h1>My Favorites</h1>
           {content}
       </section>
    )
}

export default FavoritesPage