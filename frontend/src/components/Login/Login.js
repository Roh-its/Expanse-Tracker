import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
	const navigate = useNavigate();
	const handleLogin = () => {
		// Redirect to the Outlet page upon successful login
		navigate("/Outlet");
	};

	return (
		<div className="wrapper signIn">
			<div className="illustration">
				<img src="https://media.istockphoto.com/id/1342226806/photo/mobile-phone-app-for-money-budget-and-expense-tracking.jpg?s=612x612&w=0&k=20&c=FFp9jyIJotg1pgMQnSlcQWz5XO6CpkLnR6VvKrYTcnQ=" alt="illustration" />
			</div>
			<div className="form">
				<div className="heading">LOGIN</div>
				<form>
					<div>	
						<input type="text" id="name" placeholder="Enter your Email" />
					</div>
					<div>
						<input type="password" id="passwoed" placeholder="Enter your Password" />
					</div>
					<button type="submit" onClick={handleLogin}>
						Submit
					</button>
				</form>
				<p>
					Don't have an account ? <Link to="/signup"> Sign Up </Link>
				</p>
			</div>
		</div>
	);
}