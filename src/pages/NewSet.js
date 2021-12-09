import React from 'react'
import FlashcardForm from '../components/StudySets/FlashcardForm'
import { useHistory } from 'react-router' //used to manipulate browser history 

const NewSetPage = () => {
    const history=useHistory();
    const addMeetupHandler=(setData,id=undefined)=>{
        fetch("https://react-meetup-a340c-default-rtdb.firebaseio.com/study-sets.json",
        {
            method:'POST',
            body:JSON.stringify(setData),
            headers:{
                'Content-Type':'application/json'
            }

        }
        ).then(()=>{
            alert("Study set successfully added!")
            history.replace('/'); //navigate to the homepage 
        })
    
    }
    return (
      <section>

          <h1>Add New Set</h1>
          <FlashcardForm onAddSet={addMeetupHandler}></FlashcardForm>
      </section>
    )
}

export default NewSetPage
