import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import ProductsList from './components/productsList';
import Todo from './components/Todo';
import Books from './components/Books';
import Auth from './components/Auth';
import ProductDet from './components/ProductDet';
import Cart from './components/Cart';
import ProductPage from './Pages/ProductPage';  

function Login() {
  return <h2>Login Page</h2>;
}

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<Auth />}>
          <Route path="/todo" element={<Todo />} />
          <Route path="/product" element={<ProductsList />} />
          <Route path="/productPage" element={<ProductPage ></ProductPage >} />
          {/* <Route path="/books" element={<Books ></Books >} /> */}
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='product/:id' element={<ProductDet />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;