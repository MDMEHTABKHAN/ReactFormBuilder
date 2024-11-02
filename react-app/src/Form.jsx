import React, { useState } from 'react';

export default function Form() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !payment || !shipping) {
            setError("Please fill out all required fields.");
            return;
        }

        setError("");
        console.log({
            name,
            quantity,
            comment,
            payment,
            shipping,
        });

        // Reset form
        setName("");
        setQuantity(1);
        setComment("");
        setPayment("");
        setShipping("");
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h2>Order Form</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    style={{ padding: '10px', marginBottom: '10px', width: '100%' }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                    required
                />
                <p>Name: {name}</p>

                <input
                    style={{ padding: '10px', marginBottom: '10px', width: '100%' }}
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    type='number'
                    min="1"
                    required
                />
                <p>Quantity: {quantity}</p>

                <textarea
                    style={{ padding: '10px', marginBottom: '10px', width: '100%', height: '100px' }}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder='Enter your message here'
                />
                <p>Comment: {comment}</p>

                <select
                    style={{ padding: '10px', marginBottom: '10px', width: '100%' }}
                    value={payment}
                    onChange={(e) => setPayment(e.target.value)}
                    required
                >
                    <option value="">Select a payment option</option>
                    <option value="Visa">Visa</option>
                    <option value="MasterCard">MasterCard</option>
                    <option value="GiftCard">GiftCard</option>
                    <option value="CreditCard">CreditCard</option>
                    <option value="UPI">UPI</option>
                </select>
                <p>Payment: {payment}</p>

                <label>
                    <input
                        type="radio"
                        value="Pick up"
                        checked={shipping === "Pick up"}
                        onChange={(e) => setShipping(e.target.value)}
                        required
                    />
                    Pick Up
                </label>
                <br />

                <label>
                    <input
                        type="radio"
                        value="Delivery"
                        checked={shipping === "Delivery"}
                        onChange={(e) => setShipping(e.target.value)}
                        required
                    />
                    Delivery
                </label>

                <p>Shipping: {shipping}</p>

                <button type="submit" style={{ padding: '10px', width: '100%' }}>Submit</button>
            </form>
        </div>
    );
}
