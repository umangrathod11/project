import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './App.css';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    setIsLoading(true);

    // Simulate a delayed login process
    
    setTimeout(() => {
      if (username === 'user' && password === 'password') {
        console.log('Login successful');
        setIsLoading(false);
        navigate(`FormPage`); // Use navigate to navigate to FormPage
      } else {
        console.log('Login failed');
        setIsLoading(false);
      }
    }, 2000); // Simulated 2 seconds delay
  }; 

  return (
    <div className="login-box">
      <h1>Login Form</h1>
      <form>
        <div className="user-box">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <center>
          <button type="button" onClick={handleLogin} >
            {isLoading ? 'Logging in...' : 'Sign in'}
          </button>
        </center>
      </form>
    </div>
  );
};

export default LoginPage;
