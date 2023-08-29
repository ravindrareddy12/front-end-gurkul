import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css'; // Import your stylesheet here

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to Our Website</h1>
        <p>Sample Web page</p>
      </header>
      <main className="main-content">
        <section className="cta-section">
          <h2>Join Us Today!</h2>
          <p>Start your journey with us.</p>
          <div className="cta-buttons">
            <Link to="/signup">
              <button className="signup-button">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="login-button">Log In</button>
            </Link>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
