import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={decrement}>Click me</button>
      <button onClick={increment}>Click me</button>
      <button onClick={reset}>Click me</button>
    </>
  );
};

export default Counter;
