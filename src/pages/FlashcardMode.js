import React from 'react'

import { useHistory, useLocation } from 'react-router';
import FlashcardModeKernel from '../components/StudySets/FlashcardModeKernel';

const FlashcardMode = () => {

    const history = useHistory();
    const { state } = useLocation();
    const data = state.list;
    console.log("Data: ", data);

    return (


        <FlashcardModeKernel data={data}>

           
        </FlashcardModeKernel>






    )
}

export default FlashcardMode
