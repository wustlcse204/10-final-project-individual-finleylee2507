import React from 'react'
import classes from './StudySetItem.module.css'
import { useContext } from 'react'
import Card from '../ui/Card'
import { Link } from 'react-router-dom'
import { FavoritesContext } from '../../store/favorites-context'
import Delete from '../ui/Delete'
import { useHistory } from 'react-router'
import { isLoadingContext } from '../../pages/AllStudySets'
import {IoMdCheckmarkCircle} from "react-icons/io" 
const StudySetItem = (props) => {
    const history=useHistory() //might not need it
    const favoritesCtx = useContext(FavoritesContext);
    const isLoadingCtx=useContext(isLoadingContext);
    
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id); //if a study set is set as favorite by the user 

    const toggleFavoriteStatusHandler = () => {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);

        }
        else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
          
            })
        }
    }


    const deleteHandler = (id) => {
       
        fetch(`https://react-meetup-a340c-default-rtdb.firebaseio.com/study-sets/${id}.json`, { method: 'Delete' })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                isLoadingCtx.onDelete(); //rerender the list after deletion
                
            })
    }


    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    {/* use the image if there's one, otherwise use the default icon  */}
                    {props.image? <img src={props.image} alt={props.title}></img>:<IoMdCheckmarkCircle className={classes.altImg}></IoMdCheckmarkCircle>}
                   
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>

                <div className={classes.buttonGroup}>


                    <div className={classes.actions}>

                        <Link to={{
                            pathname: "/viewset",
                            state: {

                                title: props.title,
                                list: props.list,
                                description:props.description,
                                image:props.image,
                                id:props.id
                            }
                        }} >
                            <button> Open</button>
                        </Link>

                    </div>
                    <div className={classes.actions}>
                        <Delete id={props.id} onDelete={deleteHandler}></Delete>
                    </div>

                    <div className={classes.actions}>
                        <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
                    </div>
                </div>


            </Card>


        </li>

    )
}

export default StudySetItem
