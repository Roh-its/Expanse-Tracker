import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/Layout'); // Navigate to the login page when the button is clicked
    };

    return (
        <div className="App">
            <header className="header">
                <h1>Expense Tracker</h1>
            </header>
            <main className="main-content">
                <h2>Welcome to Expense Tracker</h2>
                <p>Track your expenses efficiently with our easy-to-use app.</p>
                <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
            </main>
            <footer className="footer">
                <p>&copy; 2024 Expense Tracker. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;
