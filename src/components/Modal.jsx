function Modal({ description, quantity, sum, heading , increase, decrease ,addOrder, closing }) {
    return (
        <div className="modal">
            <button className="right-btn" onClick={closing}>x</button>
            <h2>{heading}</h2>
            <h4>{description}</h4>
            <div className="quant">
                <button className="modal-btn" onClick={decrease}>-</button>
                <span>{quantity}</span>
                <button className="modal-btn" onClick={increase}>+</button>
                <button className="long-btn" onClick={addOrder}>add for € {sum}</button>
            </div>
        </div>
    );
}

export default Modal;