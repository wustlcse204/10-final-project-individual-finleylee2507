import React, { useContext, useEffect } from 'react'
import './FlashcardModeKernel.css';
import usePersistedState from '../../storage/customHooks';
import { CurrentSetContext } from '../../storage/current-set-context';
import { isLoadingContext } from '../../pages/AllStudySets';

const FlashcardModeKernel = () => {

    const currentSetCtx = useContext(CurrentSetContext);


    const currentIndex = currentSetCtx.currentIndex;
    const currentData = currentSetCtx.currentList;
    const currentMode = currentSetCtx.currentMode;


    // console.log(currentData);

    //  console.log(currentIndex);


    const currentItem = currentSetCtx.currentList[currentIndex];

    // console.log(currentItem);

    // console.log(currentMode);


    const flipCardAnimation=()=>{
        document.getElementsByClassName('card')[0].classList.toggle('is-flipped');
    }

    return (

        //citation:https://3dtransforms.desandro.com/card-flip
        <div className='cardScene'>

            <div className='card' onClick={()=>{flipCardAnimation();}}>
                <div className='cardFace cardFaceFront'>
                    <a className='displayArea'><p>{currentItem['term']}</p></a>
                </div>
                <div className='cardFace cardFaceBack'>

                    <a className='displayArea'><p>{currentItem['definition']}</p></a>
                </div>



            </div>


            <div className='actionCenter'>

                <a className='previousBtn' title="previous" onClick={() => { currentSetCtx.previousItemHandler(); }}> &#10094; </a>
                <button className='flipBtn' onClick={() => {flipCardAnimation(); }} > Flip Card</button>
                <a className='nextBtn' title="next" onClick={() => { currentSetCtx.nextItemHandler(); }}>&#10095;</a>


            </div>


        </div>
    )
}

export default FlashcardModeKernel
