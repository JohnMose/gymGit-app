import React, { useState } from 'react';
//import './Login.css';



const Login= () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 ;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', email, password);
  };

  return (
    <div>
      <h3>Log In</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
        <label>Password:</label>
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
        <button type="login"> Log In</button>
      </form>
    </div>
  );
}

export default Login;