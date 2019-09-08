import React, { useEffect } from 'react';

function Counter ({ updateStateStartApp }) {

  useEffect(() => {
    // updateStateStartApp();
  }, [])

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter;
