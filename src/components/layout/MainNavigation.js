import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'
import { useContext } from 'react'
import { FavoritesContext } from '../../storage/favorites-context'

const MainNavigation = () => {
    const favoritesCtx=useContext(FavoritesContext)
    return (
        // The <header> element represents a container for introductory content or a set of navigational links.
       <header className={classes.header}>

           <div className={classes.logo}>Flashtastic</div>
           <nav>
               <ul>
                   <li>
                       <Link to='/'>All Study Sets</Link>
                   </li>

                   <li>
                       <Link to='/new-set'>Create New Study Set</Link>
                   </li>

                   <li>
                       <Link to='/favorites'>My Favorites
                        <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                       </Link>
                   </li>
               </ul>
           </nav>
       </header>
    )
}

export default MainNavigation
