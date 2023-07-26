import React from 'react';
// import { Link } from 'react-router-dom';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage=()=>{
  const navigate=useNavigate();

  const handleSignClick=()=>{
      navigate('/signup');
  };
  const handleLoginClick=()=>{
    navigate('/login');
  };
     


  return (
    <div>
      <div className='containerHomePage'>
        <h1>GET FIT, HAVE FUN</h1>
        
          
          { <button onClick={handleLoginClick}>Login</button> }
          <button onClick={handleSignClick}>Sign Up</button>
          </div>
    </div>
  );
};

export default HomePage;
