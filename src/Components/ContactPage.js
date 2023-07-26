import React, { useState } from 'react';
import './ContactPage.css';



const ContactPage = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', first_name,last_name, email,address, message);
  };

  return (
    <div>
      <h3>Contact Page</h3>
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
        <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div>
          <label>Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;