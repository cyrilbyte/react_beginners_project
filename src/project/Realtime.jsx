import React, { useState } from "react";

const Realtime = () => {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState();
  const [payment, paymentMethod] = useState();

  const newName = (e) => {
    setName(e.target.value);
  };
  const newNum = (e) => {
    setQuantity(e.target.value);
  };
  const newComment = (e) => {
    setComment(e.target.value);
  };
  const payment1 = (e) => {
    paymentMethod(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={newName} />
      <p>Name:{name}</p>
      <input type="number" onChange={newNum} />
      <p>Quantity:&nbqs; {quantity}</p>
      <textarea onChange={newComment}>Comment</textarea>
      <p>Comment:{comment}</p>
      <select value={payment} onChange={payment1}>
        <option value="verve">Verve</option>
        <option value="visa">Visa</option>
        <option value="momo">Momo</option>
        <option value="e-zwich">E-zwich</option>
      </select>
      <p>Payment Method:{payment}</p>
    </>
  );
};

export default Realtime;
