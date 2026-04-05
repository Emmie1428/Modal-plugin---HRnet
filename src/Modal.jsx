import "./Modal.css"

function Modal({ isOpen, onClose, message, overlayClassName, contentClassName, closeButtonClassName, messageClassName}) {
    if (!isOpen) 
        return null

    return(
        <div className={`overlay ${overlayClassName || ""}`}>
            <div className={`content ${contentClassName || ""}`}>
                <button className={`closeButton ${closeButtonClassName || ""}`} onClick={onClose}>X</button>
                <p className={`message ${messageClassName || ""}`}>{message}</p>
            </div>
        </div>
    )
}

export default Modal