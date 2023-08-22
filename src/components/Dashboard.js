import React from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';
import '..//componentStyles/Dashboard.css'; // Import your CSS file for styling
import Card from './Cards';
import ChartComponent from './ChartComp.js'; // Use correct relative path
import Stats from './Stats';

function Dashboard() {
  return (
    <>

      <div className='dashboard-container'>


      <div class="navbar">
        <div class="left">
          <h2>Dashboard</h2>
        </div>
        <div class="right">
          <div class="search">
            <input type="text" placeholder="Search..." />
            <i className="fas fa-search"></i>
          </div>
          <div class="notification">
            <FaBell />
          </div>
          <div class="user">
            <img src="https://lh3.googleusercontent.com/a/AAcHTtcxu9hAEImSDfpmdOt_tBhUl5aNsZCkr7aFLJ-0opOh8A=s96-c" alt="1SG19EC106tapan upadhyay" />
          </div>
        </div>
      </div>
      <Card></Card>
      <ChartComponent></ChartComponent>
      <Stats></Stats>


        
      </div>


    </>
  );
}

export default Dashboard;
