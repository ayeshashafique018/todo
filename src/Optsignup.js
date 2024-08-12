import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './App.css';
import logo from './img/logo_todo_clear-removebg-preview.png'; // Updated path


const Optsignup = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Navigate to the Todo list route (home page)
    navigate('/');
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
              <p className="mt-2">Enter OPT sent to your Email.</p>

              <form onSubmit={handleSubmit}> {/* Use handleSubmit function */}
                <div className="input-icons">
                  <i className="fa fa-key icon"></i>
                  <input className="input-field" type="text" placeholder="OPT Code" name="opt_code" required />
                </div>
                <button type="submit" className="signup btn custom-button mb-4">Sign Up</button>
                <p>Have an Account? <Link to="/login" style={{ color: 'grey' }}>Login</Link>.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Optsignup;
