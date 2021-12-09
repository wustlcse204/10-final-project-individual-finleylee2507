import React from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
import { useState } from 'react';
const Delete = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false); //used to control modal pop up

    const deleteHandler=()=>{
        setModalIsOpen(true);
       
    }

    const confirmHandler=()=>{
        setModalIsOpen(false);
        props.onDelete(props.id); //delete the study set
    }

    const cancelHandler=()=>{
        setModalIsOpen(false);
    }

    const backDropHandler=()=>{
        setModalIsOpen(false);
    }
    return (
        <div>
            <button onClick={deleteHandler}>Delete</button>

            {/* only display/render when delete is clicked (modalIsOpen is set to true) */}
            {modalIsOpen && <Modal onClickCancel={cancelHandler} onClickConfirm={confirmHandler}></Modal>}
            {modalIsOpen && <Backdrop onClick={backDropHandler}></Backdrop>}
        </div>




    )
}

export default Delete
