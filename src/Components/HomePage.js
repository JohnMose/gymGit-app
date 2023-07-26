import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <div className='containerHomePage'>
        <h1>GET FIT, HAVE FUN</h1>
        <p>
          Food delivers meals, drinks, and groceries from hundreds of restaurants and shops across countries directly to you.
        </p>
        <p1>Now you can get your favorite meal delivered right to your door! We've chosen the top delivery services in Kenya.</p1>

        <p2>Everything you need,</p2>
        <p3>delivered now</p3>

        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
        
        <Link to="/signup">
          <button className="signup-button">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
