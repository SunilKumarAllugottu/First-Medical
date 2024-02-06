import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/Dashboard')
    // Here, you can perform authentication if needed
    // For simplicity, I'm just storing the user ID in local storage
    localStorage.setItem('userId', userId);
    onLogin();
  };



  return (
    <>
    <div style={{backgroundColor:"#888888",maxWidth:"300px",borderRadius:"10px"}}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button  type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default Login;
