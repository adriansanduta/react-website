import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Nav from "./components/Nav.jsx";

function App() {
  return (
   <div className="App">
    <Nav />
   </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);