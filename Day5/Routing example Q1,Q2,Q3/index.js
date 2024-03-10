import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter  as Router, Routes,Link, Route } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Emps from './components/Emps';
import Depts from './components/Depts';
import NotFound from './components/NotFound';
import Details from './components/Details';

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
      <hr />
    </div>



    <Routes>
      <Route path="" element={<App />} />
      <Route path="emps" element={<Emps />} />
      <Route path="depts" element={<Depts />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="details/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
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
