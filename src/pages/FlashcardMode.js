import React,{useContext} from 'react'

import { useHistory, useLocation } from 'react-router';
import FlashcardModeKernel from '../components/StudySets/FlashcardModeKernel';
import { CurrentSetContext } from '../storage/current-set-context';
const FlashcardMode = () => {

    const history = useHistory();
    const currentSetCtx=useContext(CurrentSetContext);
    const data = currentSetCtx.currentList;
    console.log("Data: ", data);

    return (


        <FlashcardModeKernel>

           
        </FlashcardModeKernel>






    )
}

export default FlashcardMode
