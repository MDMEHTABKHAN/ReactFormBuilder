
import React, {useState} from 'react'


export default function MyComponent() {

    const [name, setName] = useState("1913");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("")

    function handleNameChange(event){
        setName(event.target.value)
    }

    function handlQuantityChange(event){
        setQuantity(event.target.value)
    }

    function handlCommentChange(event){
        setComment(event.target.value)
    }

    function handlPaymentChange(event){
        setPayment(event.target.value)
    }

    function handlShippingChange(event){
        setShipping(event.target.value)
    }

  return (
    <div>
      <input value={name}  onChange={handleNameChange}/>
      <p>Name: {name}</p>

      <input value={quantity}  onChange={handlQuantityChange} type='number' />
      <p>Quantity: {quantity}</p>

      <textarea value={comment} onChange={handlCommentChange} placeholder='Enter your message here' />
      <p>Comment: {comment}</p>


      <select value={payment} onChange={handlPaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Master Card">MasterCard</option>
        <option value="giftCard">GiftCard</option>
        <option value="creditcard">CreditCard</option>
        <option value="UPI">All UPI</option>
      </select>
      <p>Payment: {payment}</p>

      <label>
      <input type="radio" value="Pick up" 
      checked={shipping === "pick up"}
      onChange={handlShippingChange} />
        Pick Up
      </label> <br />

      <label>
        <input type="radio" value="Delivery" 
      checked={shipping === "Delivery"}
      onChange={handlShippingChange} />
        Delivery
      </label>

      <p>Shipping: {shipping}</p>

    </div>
  )
}



