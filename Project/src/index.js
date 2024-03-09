import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Emps from './components/Emps';
// import Depts from './components/Depts';
import NotFound from './components/NotFound';
import Details from './components/Details';
// import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";
import ProductsList from "./components/products/ProductsList";
import { Provider } from "react-redux";
import { CrudStore } from "./components/store/crudStore";
import { action_Types } from "./components/actions/actiontypes";
import Login2 from './components/Login2';
import Header from './components/Layout/Header/Header';
import Product from './components/product';
import { useUserRole } from './components/UserRoles';

const root = ReactDOM.createRoot(document.getElementById("root"));

 

const myStyle = {
  color: "Black",
  padding: "15px",
  fontFamily: "Candara"
};


const Renderlinks = () => {
  const userRole = useUserRole(); 
  if (userRole === 'admin') {
    return (
      <>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Login">Login</Link>
        <Link className='active' to="/List">Edit Products</Link>
        <Header />
      </>

    );
  }
  else if (userRole === 'user') {
    return (
      <>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Login">Login</Link>
        <Link className='active' to="/products">View Products</Link>
        <Link to="/Contact">Contact</Link>
        <Header />
      </>
    );
  }
  else {
    return (
      <>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Contact">Contact</Link>
        <Header />
      </>
    );
  }
}

const routing = (
  <Router>
    <div style={{ "textAlign": "center" }}>
      <div style={myStyle}>
        <div class="container">
          <div className='row'>
            <div className='col-3 logo'>
              <img src="images/caratlane.jpg" width="10" alt="Your ultimate jewellery Site" />  <span />
              <h3 style={myStyle}>Caratlane Site </h3>
            </div>
            <div className='col-9 c-links'>
             <Renderlinks/>
            </div>
          </div>

        </div>

      </div>
    </div>
    <Routes>
      <Route path="" element={<App />} />
      <Route path="products" element={
        <ProtectedRoute returnUrl="/Products">
          <ProductsList />
        </ProtectedRoute>
      } />
      <Route path="List" element={
        <ProtectedRoute returnUrl="/List">
          <Product />
        </ProtectedRoute>
      } />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="details/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
      <Route path="login" element={<Login2 />} />
    </Routes>
  </Router>
);


CrudStore.dispatch({ type: action_Types.Get });
root.render(
  <React.StrictMode>
    <Provider store={CrudStore}>
      {routing}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
