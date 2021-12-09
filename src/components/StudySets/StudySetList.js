import React from 'react'
import StudySetItem from './StudySetItem'
import classes from './StudySetList.module.css'

//css modules:https://css-tricks.com/css-modules-part-1-need/ 

const StudySetList = (props) => {
    return (

        <ul className={classes.list}>
            {props.studysets.length>0?props.studysets.map(studyset => <StudySetItem key={studyset.id} id={studyset.id} image={studyset.image} title={studyset.title} description={studyset.description} list={studyset.list} />):"You don't have a study set. Go create one."}
            
        </ul>
    )
}

export default StudySetList
