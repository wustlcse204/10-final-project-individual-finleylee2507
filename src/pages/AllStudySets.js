import React from 'react';
import { useState, useEffect, createContext } from 'react';
import StudySetList from '../components/StudySets/StudySetList';

export const isLoadingContext = createContext({
    onDelete: ()=>{},
    loadedSets:[]
});

const AllStudySetsPage = () => {
    const [isLoading, setIsLoading] = useState(true); //is the page still loading 
    const [loadedSets, setLoadedSets] = useState([]);//all the study sets fetched from the server 
    const [isRerender,setIsRerender]=useState(false); //whether the page needs to be rerendered 

    //provide as a context to other classes (StudySetItem)
    const handleDelete=()=>{
        setIsRerender(true); //rerender the list after deletion
    };
    
    useEffect(() => {
        //fetch the data from the database 
        setIsLoading(true);
        fetch('https://react-meetup-a340c-default-rtdb.firebaseio.com/study-sets.json')
            .then((response) => {

                return response.json();
            })
            .then((data) => { //handle the returned object by firebase 
                console.log(data)
                const studysets = [];

                for (const key in data) {

                    const studyset = {
                        id: key,
                        ...data[key] //copy the rest of the data
                    }
                    studysets.push(studyset);
                }
                setIsLoading(false); //once the data is here, change loading state 
                setLoadedSets(studysets); //set loaded set 
                setIsRerender(false);
            });



    }, [isRerender]);//if empty array, react only exectues useEffect the first time the component is rendered 
    //if we added isRerender, useEffect will run whenever the value of isRerender changes 
   
    const context={
        onDelete:handleDelete,
        loadedSets:loadedSets
    }
    return (
        <div>
            <h1>Your study sets</h1>
            {/* note:react can render an array of element with no problem  */}
            <isLoadingContext.Provider value={context}> {isLoading ? <p>Loading...</p> : <StudySetList studysets={loadedSets} ></StudySetList>}</isLoadingContext.Provider>

        </div>
    )
}

export default AllStudySetsPage
