function Orders({ description, quantity, sum, heading }) {
    return (
        <div className="oneOrder">
            <h2>{heading}</h2>
            <p>{description}</p>
            <span>{sum}</span>
            <button>{quantity} ^</button>
        </div>
    );
}

export default Orders;