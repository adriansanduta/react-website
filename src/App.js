import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from "./components/Nav.jsx";
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Books from "./pages/Books";
import {books} from "./data";
import BookInfo from './pages/BookInfo.jsx';
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}]);
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => 
        item.id === book.id
        ? {
          ...item,
          quantity: +quantity,
        }
        : item
    ));
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
   <div className="App">
    <Nav />
    <Route path="/" exact component={Home} />
    <Route path="/books" exact render={() => <Books books={books}/>} />
    <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart}/>} />
    <Route path="/cart"  render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>} />
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