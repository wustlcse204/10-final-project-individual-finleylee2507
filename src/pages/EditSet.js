import React from 'react';
import FlashcardForm from '../components/StudySets/FlashcardForm';
import { useHistory, useLocation } from 'react-router'; //used to manipulate browser history 


const EditSetPage = () => {
    const history=useHistory();
    const { state } = useLocation();
    const list=state.list;
    const title=state.title;
    const description=state.description;
    const image=state.image;
    const id=state.id;

    const editMeetupHandler=(setData,id)=>{
      
      fetch(`https://react-meetup-a340c-default-rtdb.firebaseio.com/study-sets/${id}.json`,{
          method:'PUT',
          headers:{
            'Content-type': 'application/json'
          },
          body:JSON.stringify(setData)

      }).then(
          (response)=>{
              alert("Edit successful!");
              history.replace('/'); //navigate back to homepage
          }
      )
      
    }

 

    
    return (
      <section>

          <h1>Edit Set</h1>
          <FlashcardForm onAddSet={editMeetupHandler} list={list} title={title} id={id} description={description} imgurl={image} ></FlashcardForm>
      </section>
    )
}

export default EditSetPage
