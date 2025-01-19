import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'; // Import axios for making HTTP requests
import './Login.css';

export default function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Use useNavigate hook to navigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to backend
      const response = await axios.post("http://localhost:3001/api/v1/user", formData);
      console.log(response.data); // Log the response from the server
      // Redirect the user to login page after successful signup
      navigate('/login');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="wrapper signUp">
      <div className="illustration">
        <img src="https://media.istockphoto.com/id/1342226806/photo/mobile-phone-app-for-money-budget-and-expense-tracking.jpg?s=612x612&w=0&k=20&c=FFp9jyIJotg1pgMQnSlcQWz5XO6CpkLnR6VvKrYTcnQ=" alt="illustration" />
      </div>
      <div className="form">
        <div className="heading">CREATE AN ACCOUNT</div>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" id="username" placeholder="Enter your name" onChange={handleChange} />
          </div>
          <div>
            <input type="email" id="email" placeholder="Enter your email" onChange={handleChange} />
          </div>
          <div>
            <input type="password" id="password" placeholder="Enter your password" onChange={handleChange} />
          </div>
          <button type="submit">Submit</button>
          <h2 align="center" className="or">
            OR
          </h2>
        </form>
        <p>
          Have an account ? <Link to="/login"> Login </Link>
        </p>
      </div>
    </div>
  );
}