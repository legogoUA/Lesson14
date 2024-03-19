import React, { useState } from 'react';
import './Counter.css';

export const Counter = () => {
  const [value, useValue] = useState(0);

  const Change = () => {
    useValue(value + 1);
  };

  return (
    <div className='container'>
      <h1>Counter</h1>
      <p>{value}</p>
      <button onClick={Change}>Click</button>
    </div>
  )
}
