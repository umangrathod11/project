import React from 'react';
import './App.css';

const LogoutPage = () => {
  const handleLogout = () => {
    // Handle logout logic, such as clearing session, etc.
    console.log('User logged out');
  };

  return (
    <div className="logout-box">
      <h1>Logout Page</h1>
      <center>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </center>
    </div>
  );
};

export default LogoutPage;
