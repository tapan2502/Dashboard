import React from 'react';
import './App.css';
import Card from './components/Cards';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import LoginPage from './loginpage/LoginPage'; // Import LoginPage component
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';



function App() {

  const handleSuccessfulSignIn = () => {
    // Handle any necessary logic for successful sign-in
    // Navigate to the home page
    window.location.href = '/';
  };


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} /> {/* Route for LoginPage */}
          <Route path="/" element={<div className='main'>
              <Navbar />
              <Dashboard />
              
            </div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
