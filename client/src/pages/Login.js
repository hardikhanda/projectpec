import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import "./Login.css";

const Login = () => {
//   const [token, setToken] = useState(null);
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const handleLogin = (token) => {
//     setToken(token);
   
//     navigate('/dashboard');
//   };

  return (
    <div>
      {/* {token ? (
        <p>You are logged in!</p>
      ) : ( */}
        <div className='containeri' >
          {/* <h2 className='login' >LOGIN</h2> */}
          <LoginForm />
        </div>
    </div>
  );
};

export default Login;
