import React from 'react'
import classes from './Card.module.css'

const Card = (props) => {
    return (
        <div className={classes.card}>
            {/* holds the children between the opening and closing tag */}
            {props.children} 
        </div>
    )
}

export default Card
