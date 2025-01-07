import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from "./components/Nav.jsx";
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';

function App() {
  return (
    <Router>
   <div className="App">
    <Nav />
    <Route />
    <Home />
     <Footer />
   </div>
   </Router>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);