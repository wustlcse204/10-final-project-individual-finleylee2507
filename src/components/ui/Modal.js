import React from 'react'
import classes from './Modal.module.css'
const Modal = (props) => {
    return (
        <div className={classes.modal}>
            <p>Are you sure?</p>
            <button className={classes.cancelButton} onClick={props.onClickCancel}>Cancel</button>
            <button className={classes.confirmButton} onClick={props.onClickConfirm}>Confirm</button>

        </div>
    )
}

export default Modal
