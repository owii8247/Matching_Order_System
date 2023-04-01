import React, { useState } from 'react'

const Form = ({ onSubmit }) => {
  const [buyerQty, setBuyerQty] = useState("");
  const [buyerPrice, setBuyerPrice] = useState("");
  const [sellerPrice, setSellerPrice] = useState("");
  const [sellerQty, setSellerQty] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ buyerQty, buyerPrice, sellerPrice, sellerQty });
    setBuyerQty('');
    setBuyerPrice('');
    setSellerPrice('');
    setSellerQty('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Buyer Qty : <span>{" "}</span>
        <input type="number" value={buyerQty} onChange={(e) => setBuyerQty(e.target.value)} />
      </label>
      <label>
        Buyer Price : <span>{" "}</span>
        <input type="number" value={buyerPrice} onChange={(e) => setBuyerPrice(e.target.value)} />
      </label>
      <label>
        Seller Price : <span>{" "}</span>
        <input type="number" value={sellerPrice} onChange={(e) => setSellerPrice(e.target.value)} />
      </label>
      <label>
        Seller Qty : <span>{" "}</span>
        <input type="number" value={sellerQty} onChange={(e) => setSellerQty(e.target.value)} />
      </label>
      <button type="submit">Place Order</button>
    </form>
  )
}

export default Form