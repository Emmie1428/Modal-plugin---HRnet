import "./Modal.css"

function Modal({ isOpen, onClose, message}) {
    if (!isOpen) 
        return null

    return(
        <div className="overlay">
            <div className="content">
                <button className="closeButton" onClick={onClose}>X</button>
                <p className="message">{message}</p>
            </div>
        </div>
    )
}

export default Modal