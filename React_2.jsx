import React, { useState } from 'react';

// Button Component with Inline CSS
const Button = ({ label, onClick }) => {
  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    margin: '5px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#4CAF50',
    color: 'white',
    transition: 'background-color 0.3s',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};

// Counter Component with Inline CSS
const Counter = () => {
  const [count, setCount] = useState(0);

  const counterStyle = {
    fontSize: '2rem',
    margin: '20px',
  };

  const containerStyle = {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={containerStyle}>
      <div style={counterStyle}>Count: {count}</div>
      <Button label="Increment" onClick={handleIncrement} />
      <Button label="Decrement" onClick={handleDecrement} />
    </div>
  );
};

// App Component - Rendering Counter
const App = () => {
  const appStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    textAlign: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={appStyle}>
      <Counter />
    </div>
  );
};

export default App;
