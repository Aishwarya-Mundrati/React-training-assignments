import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Emps from './components/Emps';
import Depts from './components/Depts';
import NotFound from './components/NotFound';
import Details from './components/Details';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';


const routing = (
  <Router>
    <div style={{ "textAlign": "center" }}>
      <h3>Routing implementation in React JS</h3>
      <hr />
      <Link to="/">Home</Link> |
      <Link to="/Emps">Employees</Link> |
      <Link to="/Depts">Departments</Link> |
      <Link to="/Contact">Contact</Link> |
      <Link to="/About">About</Link> |
      <Link to="/Hello">Invalid</Link> |
      <Link to="/Login">Login</Link> |
      <hr />
    </div>

    <Routes>
      <Route path="" element={<App />} />
      <Route path="emps" element={

        <ProtectedRoute returnUrl="/Emps">
          <Emps />
        </ProtectedRoute>
      } />
      <Route path="depts" element={
        <ProtectedRoute returnUrl="/Depts">
          <Depts />
        </ProtectedRoute>
      } />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="details/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
      <Route path="login" element={<Login />} />
    </Routes>

  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);


reportWebVitals();
