import React from 'react';
import './Modal.css';

const Modal = ({show = false, children}) => {
    return (
        <div className={show ? "modal not-hidden" : "modal hidden"}>
            <div className="modal-content">
                {children}
            </div>
        </div>
    );
};

export default Modal;
