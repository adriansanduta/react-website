import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from "./components/Nav.jsx";
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Books from "./pages/Books";
import {books} from "./data";
import BookInfo from './pages/BookInfo.jsx';

function App() {
  return (
    <Router>
   <div className="App">
    <Nav />
    <Route path="/" exact component={Home} />
    <Route path="/books" render={() => <Books books={books}/>} />
    <Route path="/books/1" render={() => <BookInfo books={books}/>} />
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