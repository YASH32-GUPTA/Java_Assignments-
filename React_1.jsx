import React from 'react';

// Header Component with Inline CSS
const Header = () => {
  const headerStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <header style={headerStyle}>
      <h1>Welcome to My React App</h1>
    </header>
  );
};

// Main Component with Inline CSS
const Main = () => {
  const mainStyle = {
    padding: '20px',
    fontSize: '1.2rem',
    textAlign: 'center',
  };

  return (
    <main style={mainStyle}>
      <p>This is the main content area.</p>
    </main>
  );
};

// Footer Component with Inline CSS
const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
  };

  return (
    <footer style={footerStyle}>
      <p>© 2024 My React App</p>
    </footer>
  );
};

// App Component - Rendering Header, Main, and Footer
const App = () => {
  const appContainerStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    margin: '0',
    padding: '0',
    backgroundColor: '#f4f4f4',
  };

  return (
    <div style={appContainerStyle}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
