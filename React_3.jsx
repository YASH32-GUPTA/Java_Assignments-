import React, { useState } from 'react';

function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        margin: '5px',
        borderRadius: '5px',
      }}
    >
      {label}
    </button>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Interactive Counter App</h1>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{count}</p>
      <div>
        <Button label="Increment" onClick={increment} />
        <Button label="Decrement" onClick={decrement} />
        <Button label="Reset" onClick={reset} />
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
