import { createContext, useEffect, useState } from "react";
import usePersistedState from "./customHooks"; 

export const CurrentSetContext = createContext({
    currentList: [],
    currentTitle: "",
    currentDescription: "",
    currentImage: "",
    currentId: 0,
    currentIndex:0,
   
    currentMode:"",
    updateInfoHandler: (list, title, description, image, id) => { },
    resetFlashCardMode:()=>{},
    previousItemHandler:()=>{},
    nextItemHandler:()=>{},
    flipHandler:()=>{},
    changeCurrentItem:()=>{}
});//returns a react component 



//main react wrapper class 
export const CurrentSetContextProvider = (props) => {
    const [currentList, setCurrentList] = usePersistedState("list", []);

    const [currentTitle, setCurrentTitle] = usePersistedState("title", "");
    const [currentDescription, setCurrentDescription] = usePersistedState("description", "");
    const [currentImage, setCurrentImage] = usePersistedState("image", "");
    const [currentId, setCurrentId] = usePersistedState("id", 0);
    const [currentIndex,setCurrentIndex]=usePersistedState("index",0);
    
    const [currentMode,setCurrentMode]=usePersistedState("mode","term");





    const updateInfoHandler = (list, title, description, image, id) => {

        console.log("Update info");

        setCurrentList(list);
        setCurrentTitle(title);
        setCurrentDescription(description);
        setCurrentImage(image);
        setCurrentId(id);

        // window.localStorage.setItem('currentList',list);
        // window.localStorage.setItem('currentTitle',title);
        // window.localStorage.setItem('currentDescription',description);
        // window.localStorage.setItem('currentImage',image);
        // window.localStorage.setItem('currentId',id);
        console.log(currentList);
        console.log(currentId);

    };

    const resetFlashCardMode=()=>{
        setCurrentIndex(0);
    
        setCurrentMode("term");
    }

 

    const nextItemHandler=()=>{
        setCurrentIndex((prevCount)=>{
            if(prevCount+1<currentList.length){
                return prevCount+1;
            }
            else{
                return prevCount;
            }
           
        });
    }

    const previousItemHandler=()=>{
        setCurrentIndex((prevCount)=>{
            if(prevCount-1>=0){
                return prevCount-1;
            }
            else{
                return prevCount;
            }
           
        });
    };

    const flipHandler=()=>{
        setCurrentMode((previousMode)=>{
            if(previousMode==="term"){
               return "definition";
            }
            else{
               return "term";
            }
        })
    };

    const context = {
        currentList: currentList,
        currentTitle: currentTitle,
        currentDescription: currentDescription,
        currentImage: currentImage,
        currentIndex:currentIndex,
        currentId: currentId,
        currentMode:currentMode,
        updateInfoHandler: updateInfoHandler,
        resetFlashCardMode:resetFlashCardMode,
        nextItemHandler:nextItemHandler,
        previousItemHandler:previousItemHandler,
        flipHandler:flipHandler,
       
    };

    return <CurrentSetContext.Provider value={context}>
        {props.children}
    </CurrentSetContext.Provider>
}
