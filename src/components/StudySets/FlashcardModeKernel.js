import React, { useContext, useEffect } from 'react'
import classes from './FlashcardModeKernel.module.css'
import usePersistedState from '../../storage/customHooks';
import { CurrentSetContext } from '../../storage/current-set-context';
import { isLoadingContext } from '../../pages/AllStudySets';

const FlashcardModeKernel = () => {

    const currentSetCtx=useContext(CurrentSetContext);
  
    // const [currentIndex, setCurrentIndex] = usePersistedState("currIndex", 0);
    // const [currentItem, setCurrentItem] = usePersistedState("currItem", "");
    // const [currentData, setCurrentData] = usePersistedState("currData", data);
    // const [currentMode, setCurrentMode] = usePersistedState("currMode", "term"); //0 ->term first, 1 ->definition first
    const currentIndex=currentSetCtx.currentIndex;
    const currentData=currentSetCtx.currentList;
    const currentMode=currentSetCtx.currentMode;
 

    // console.log(currentData);

    //  console.log(currentIndex);

    
     const currentItem=currentSetCtx.currentList[currentIndex];

    // console.log(currentItem);
 
    // console.log(currentMode);
  



    return (
        <div className={classes.card}>


            {/* <a className={classes.displayArea}>{currentItem[currentMode] ? <p>{currentItem[currentMode]}</p> : <p>Loading...</p>}</a> */}

            <a className={classes.displayArea}><p>{currentItem[currentMode]}</p></a>
            <div className={classes.actionCenter}>

                <a className={classes.previousBtn} title="previous" onClick={()=>{currentSetCtx.previousItemHandler();}}> &#10094; </a>
                <button className={classes.flipBtn} onClick={()=>{currentSetCtx.flipHandler();}} > Flip Card</button>
                <a className={classes.nextBtn} title="next" onClick={()=>{currentSetCtx.nextItemHandler();}}>&#10095;</a>


            </div>

        </div>
    )
}

export default FlashcardModeKernel
