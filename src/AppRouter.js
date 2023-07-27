
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Outlet } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ContactPage from './Components/ContactPage';
import AboutPage from './Components/AboutPage';
import './AppRouter.css'; // Import the custom CSS file


const AppRouter = () => {
  return (
    <Router>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact</Link>//change to Signup
          </li>
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
