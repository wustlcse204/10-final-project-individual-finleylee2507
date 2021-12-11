import React from 'react';
import FlashcardForm from '../components/StudySets/FlashcardForm';
import { useHistory, useLocation } from 'react-router'; //used to manipulate browser history 
import { CurrentSetContext } from '../storage/current-set-context';
import { useContext } from 'react';

const EditSetPage = () => {
    const history=useHistory();
   

    const currentSetCtx=useContext(CurrentSetContext);
    const list=currentSetCtx.currentList;
    const title=currentSetCtx.currentTitle;
    const description=currentSetCtx.currentDescription;
    const image=currentSetCtx.currentImage;
    const id=currentSetCtx.currentId;

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
