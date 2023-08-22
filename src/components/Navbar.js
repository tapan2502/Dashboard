import React from 'react';
import '../componentStyles/Navbar.css'; // Import your CSS file for styling
import { FaHome, FaChartLine, FaCalendar, FaUsers, FaCog } from 'react-icons/fa';
function Navbar() {
    return (

        <>
       
   <div className='sidebar'>

   


             <div class="sidebar-inner">
                <h1>Board<span>.</span></h1>
                <ul class="top-nav">
                    <p><a hrefs="/dashboard"><FaHome /> Dashboard</a></p>
                    <p><a href="/transition"><FaChartLine /> Transition</a></p>
                    <p><a href="/schedules"><FaCalendar /> Schedules</a></p>
                    <p><a href="/users"><FaUsers /> Users</a></p>
                    <p><a href="/settings"><FaCog /> Settings</a></p>
                </ul>
                <ul class="footer">
                    <p>Help</p>
                    <p>Contact Us</p>
                </ul>
            </div> 



</div>




        </>
    );
}

export default Navbar;
