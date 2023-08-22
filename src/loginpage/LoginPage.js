import React from 'react';
import './LoginPage.css'; // Import your CSS file for styling
import {  FaApple } from 'react-icons/fa';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  function handleCallbackResponse(response) {
    console.log("logged IN");
    // Perform any necessary logic for handling the sign-in success

    // Redirect to the home page route
    navigate('/');
  }

useEffect(() =>{
 /*global google*/

  google.accounts.id.initialize({
    client_id:"652494205550-smdp9ptvcd8sdonto4v4shmolrt5tvfc.apps.googleusercontent.com",
    callback: handleCallbackResponse
  })

  google.accounts.id.renderButton(
    document.getElementById("SignInDiv"),
    {theme:"outline",size:"small"}  
  )

},[]);







  return (
    <div className="container">
      <div className="card">
        <h1>Board<span>.</span></h1>
      </div>
      <div className="card">
        <div className="login-container">
          <h1>Sign In</h1>
          <p>Sign in to your account</p>
          <div className="button-group">
           <div id='SignInDiv'>

           </div>
            {/* <button className="google-button">
              <FaGoogle /> Sign with Google
            </button> */}
            <button className="apple-button">
              <FaApple /> Sign with Apple
            </button>
          </div>
          <form>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value="johndeo@gmail.com"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value="asdfghjkl"
              />
            </div>
            <p>Forgot Password?</p>
            <button type="button">Sign In</button>
          </form>
          <p className="register">
            Don't have an account? <span>Register here</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
