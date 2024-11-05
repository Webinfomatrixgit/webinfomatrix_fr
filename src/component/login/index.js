import React, { useState } from 'react';
import './index.css';
import Cookies from 'js-cookie'; // Import the js-cookie library

const LoginForm = () => {
  // State variables for form inputs and error message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the page from reloading

    // Basic form validation
    if (!email || !password) {
      setError('Both email and password are required');
      return;
    }

    // Clear any previous error message
    setError('');

    try {
      // Call the API to authenticate the user
      const response = await loginUser(email, password);
      
      if (response) {
        
        // Set the JWT token in the cookie for 7 days
        Cookies.set('jwt', response.token, { expires: 7, path: '' });

        // Redirect or handle the next steps after successful login
        console.log('Login successful, JWT saved to cookies');
        window.location.href = '/dashboard'; // Replace with your redirect logic
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }

    // Clear the form after submission
    setEmail('');
    setPassword('');
  };

  // Function to call the actual API for login
  const loginUser = async (email, password) => {
    try {
      const response = await fetch('http://34.207.92.172:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Send the email and password in the body
      });
       
      if (!response.ok) {
        throw new Error('Invalid credentials or server error');
      }

      const data = await response.json();

      if (data.response) {
        return { token: data.response }; // Return the token from the API response
      } else {
        throw new Error('Authentication failed');
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <button type="submit" className='login-button'>Login</button>
        </div>
      </form>

      <div className="signup-link">
        <p>Don't have an account? <a href="/registration">Sign up</a></p>
      </div>
    </div>
  );
};

export default LoginForm;
