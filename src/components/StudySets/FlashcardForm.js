import React from 'react';
import Card from '../ui/Card';
import classes from './FlashcardForm.module.css';
import { useState } from 'react';
const FlashcardForm = (props) => {

    const list = props.list; //input list passed from the parents, could be empty if creating a new form 
    const title = props.title;
    const imgurl = props.imgurl;
    const description = props.description;
    const id = props.id;
    const [inputList, setInputList] = useState(list ? list : [{ term: "", definition: "" }]);
    const [titleInput, setTitleInput] = useState(title ? title : '');
    const [imageInput, setImageInput] = useState(imgurl ? imgurl : '');
    const [descriptionInput, setDescriptionInput] = useState(description ? description : '');


    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target; //name->select term or def, value -> the actual value 
        console.log("Name: ", name);
        console.log("Value: ", value);
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { term: "", definition: "" }]);
    };


    //handle form submit (save button click)
    const submitHandler = (e) => {
        e.preventDefault();

        // const enteredTitle = titleInputRef.current.value;
        // const enteredImage = imageInputRef.current.value;
        // const enteredDescription = descriptionInputRef.current.value;

        const setData = {
            title: titleInput,
            image: imageInput,
            description: descriptionInput,
            list: inputList
        }

        props.onAddSet(setData, id) //send to backend 
    }
    return (

        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Set Name</label>
                    <input type='text' placeholder='Create a name for your study set' required id='title' value={titleInput} onChange={(e) => setTitleInput(e.target.value)}></input>

                </div>
                {/* TODO: can try out file upload later  */}
                <div className={classes.control}>
                    <label htmlFor="image"> Set Image</label>
                    <input type='url' id='image' placeholder='Enter the url for your chosen image for the study set (optional)' value={imageInput} onChange={(e) => setImageInput(e.target.value)}></input>

                </div>

                <div className={classes.control}>
                    <label htmlFor="description"> Description</label>
                    <textarea id='description' placeholder='Say something about the study set (optional)' rows='5' value={descriptionInput} onChange={(e) => setDescriptionInput(e.target.value)}></textarea>
                    <br></br>
                    <label htmlFor='termDefs'>Please enter your terms and definitions below:</label>

                </div>





                <div id='termDefs'>

                    {/* citation:https://www.cluemediator.com/add-or-remove-input-fields-dynamically-with-reactjs */}
                    {/* for the flashcard items  */}
                    {inputList.map((x, i) => {
                        return (
                            <div className={classes.control}>
                                <div className={classes.counter}>{i + 1}</div>
                                <hr></hr>
                                <input type='text' name='term' placeholder='Enter term' id={`term${i}`} value={x.term} required onChange={e => handleInputChange(e, i)}></input>

                                <input type='text' name='definition' placeholder='Enter definition' id={`definition${i}`} value={x.definition} required onChange={e => handleInputChange(e, i)}></input>
                                <br></br>
                                <div className={classes.buttonBox}>
                                    {inputList.length !== 1 && <button className={classes.removeButton} onClick={() => handleRemoveClick(i)}>Remove</button>}
                                    {/* only display the add button at the last item  */}
                                    {inputList.length - 1 === i && <button className={classes.addButton} onClick={handleAddClick}>Add</button>}
                                </div>

                            </div>


                        )
                    })}
                </div>




                <div className={classes.actions}>
                    {/* <button onClick={submitHandler}>Save</button> */}
                    <input type='submit' value='Save' className={classes.submitButton}></input>
                </div>


            </form>
        </Card>




    )
}

export default FlashcardForm
