import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
      alert('Login successful!');
      navigate('/home');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h3>Login</h3>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="InputGroup">
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
          <button type="submit" className="auth-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
