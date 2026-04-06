/*
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `isOpen` | boolean | Yes | Controls whether the modal is displayed |
| `onClose` | function | Yes | Function triggered when the close button is clicked |
| `message` | string | Yes | Message displayed inside the modal |
| `overlayClassName` | string | No | Custom class for the overlay |
| `contentClassName` | string | No | Custom class for the modal content |
| `closeButtonClassName` | string | No | Custom class for the close button |
| `messageClassName` | string | No | Custom class for the message text |
*/

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