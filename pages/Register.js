import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Layout from './../components/Layout/Layout';
import './Register.css'; 

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Registration successful! Please log in.');
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h3>Register</h3>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="InputGroup">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
              placeholder="Enter Your Name"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              placeholder="Enter Your Email"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <button type="submit" className="auth-button">Register</button>
        </form>
        <p className="auth-switch">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
