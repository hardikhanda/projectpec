import React, { useState } from 'react';
import './LoginForm.css';


const LoginForm = ({ onLogin }) => {
  const [blurBackground, setBlurBackground] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFocus = () => {
    setBlurBackground(true);
  };

  const handleBlur = () => {
    setBlurBackground(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      console.log(data);
      onLogin(data.token); // Assuming backend sends a token upon successful login
    } catch (error) {
      console.error('Login failed:', error);
      // Handle error
    }
  };

  return (
    <div className="login-page">
    <div className={`background-container ${blurBackground ? 'blur' : ''}`}></div>
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
  );
};

export default LoginForm;
