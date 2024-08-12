import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import './App.css';
import logo from './img/logo_todo_clear-removebg-preview.png'; // Updated path


const Signup = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Here you would typically handle form validation and submission logic
    // ...

    // Navigate to the Optsignin route
    navigate('/Optsignup');
  };

  return (
    <div className="container-fluid py-5 d-flex justify-content-center align-items-center wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5 d-flex align-items-center justify-content-center min-vh-100">
        <div className="item row justify-content-center">
          <div className="welcome col-lg-6 col-md-12 d-flex flex-column align-items-center text-center full-height">
            <img src={logo} alt="logo" style={{ height: '65px', width: 'auto' }} />
            <h2 className="mt-3">Welcome Back</h2>
            <p>To keep connected with us please<br />signin with your personal info.</p>
          </div>

          <div className="divform col-lg-6 col-md-12 d-flex flex-column align-items-center text-center mt-4 mb-4">
            <div className="form" style={{ width: '80%' }}>
              <h2 className="mt-2">Create Account</h2>
              <p className="mt-2">Please fill out the form below to create your account. <br />Or signup with</p>
             
              <a className="btn  btn-square me-2 mb-4" href="https://www.google.com">
                <i className="fab fa-google"></i>
              </a>
              <a className="btn  btn-square me-2 mb-4" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>

              <form onSubmit={handleSubmit}> {/* Use handleSubmit function */}
                <div className="input-icons">
                  <i className="fa fa-user icon"></i>
                  <input className="input-field" type="text" placeholder="Username" name="username" required />
                </div>
                <div className="input-icons">
                  <i className="fa fa-envelope icon"></i>
                  <input className="input-field" type="email" placeholder="Email" name="email" required />
                </div>
                <div className="input-icons">
                  <i className="fa fa-key icon"></i>
                  <input className="input-field" type="password" placeholder="Password" name="password" minLength="6" required />
                </div>
                <div className="input-icons">
                  <i className="fa fa-key icon"></i>
                  <input className="input-field" type="password" placeholder="Confirm Password" name="confirmPassword" minLength="6" required />
                </div>
                <button type="submit" className="signup btn custom-button mb-2">Sign Up</button>
                <p>Have an Account? <Link to="/login" style={{ color: 'grey' }}>Login</Link>.</p> {/* Use Link for internal navigation */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
