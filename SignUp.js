import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';



const SignUp = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', first_name,last_name, email,gender, age,address, message);
  };

  return (
    <div>
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>FirstNameName:</label>
          <input type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div>
        <label>LastNameName:</label>
          <input type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
        <label>Gender:</label>
          <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} required />
        </div>
        <div>
        <label>Age:</label>
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} required />
        </div>
        <div>
        <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div>
          <label>Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        </div>
        <Link to="/SignUp">
          <button className="signup-button">Sign Up</button>
        </Link>
      </form>
    </div>
  );
}

export default SignUp;