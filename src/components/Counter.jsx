import React from 'react'
import { useState } from 'react';

function Counter() {
      let [counte, setCount] = useState(0);
      let increment = () => {setCount(counte + 1)};
      let decrement = () => {setCount(counte - 1)};
      let reset = () => {setCount(0)};
  return (
    <div>
      <h1>{counte}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
