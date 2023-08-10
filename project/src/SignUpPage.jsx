import React, { useState } from 'react';
import './App.css';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Handle sign-up logic using username and password
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="signup-box">
      <h1>Sign Up Form</h1>
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
          <button type="button" onClick={handleSignUp}>
            Sign Up
          </button>
        </center>
      </form>
    </div>
  );
};

export default SignUpPage;
