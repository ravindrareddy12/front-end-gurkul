import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext'; // Import the useUser hook
import '../Styles/Login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useUser(); // Use the setUser function from context

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://gurkul.onrender.com/login', {
        email,
        password,
      });
      // Handle successful login
      console.log('Login successful', response.data);

      // Assuming your response contains user information
      const userData = response.data.user;
      setUser(userData);

      // Navigate to Dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error', error);
      // Handle login error
    }
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleLogin} style={{ marginTop: '200px' }}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
