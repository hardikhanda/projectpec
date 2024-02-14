import React, { useState } from 'react';
import './LoginForm.css';
import { jwtDecode } from "jwt-decode";


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
      // Check user role and redirect accordingly
      if (data.token) {
        const decodedToken = jwtDecode(data.token); // Assuming you're using jwt-decode library
        if (decodedToken && decodedToken.role === 'student') {
          // Redirect to student dashboard
          window.location.href = '/student-dashboard';
        } else if (decodedToken && decodedToken.role === 'teacher') {
          // Redirect to teacher dashboard
          window.location.href = '/teacher-dashboard';
        }
      } else {
        // Handle login failure
        console.error('Login failed:', data.error);
      }
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
