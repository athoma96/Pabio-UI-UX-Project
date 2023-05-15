import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage'
import SearchPage from './components/SearchPage'
import Cart from './components/Cart'
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import SearchResults from "./components/SearchResults";
import PaymentPage from "./components/PaymentPage";
import OrderConfirmationPage from "./components/OrderConfirmation";
import Categories from './components/Categories';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/themes" element={<Categories/>} />
          <Route path="/search" element={<SearchPage/>} />
          <Route path="/search_result" element={<SearchResults/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/payment" element={<PaymentPage/>} />
          <Route path="/confirm" element={<OrderConfirmationPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// const item = {
//   price: 99.99,
//   title: 'Product Title',
//   rating: 4.5,
//   dimensions: '72" x 36" x 30"',
//   images: [
//     'https://cdn.home-designing.com/wp-content/uploads/2019/12/unique-iconic-scandinavian-accent-chair-fried-egg-shape-600x600.jpg',
//   ],
//   description: 'This is a sample product description.',
// };