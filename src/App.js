import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Landing from "./components/Landing.jsx";
import Nav from "./components/Nav.jsx";
import Highlights from './components/Highlights.jsx';
import Featured from './components/Featured.jsx';
import Discounted from './components/Discounted.jsx';

function App() {
  return (
   <div className="App">
    <Nav />
    <Landing />
    <Highlights />
    <Featured /> 
     <Discounted />
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