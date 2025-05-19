'use client';
import { useReducer } from 'react';
import './style.css';

const countReducer = (state: number, action: { type: string }) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      throw new Error('Unknown action type');
  }
};

export default function TestingUseReducer() {
  const [count, countDispatch] = useReducer(countReducer, 0);

  return (
    <div>
      <h1>Testing useReducer</h1>

      <br></br>
      <p>Count: {count}</p>
      <div className='buttons'>
        <button onClick={() => countDispatch({ type: 'increment' })}>
          Increment
        </button>
        <button onClick={() => countDispatch({ type: 'decrement' })}>
          Decrement
        </button>
      </div>
    </div>
  );
}
