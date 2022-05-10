import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MainContext } from '../../context/MainContext';
import { useNavigate } from 'react-router-dom';
import './NavbarCSS.css';

const NavbarComp = () => {
  const location = useLocation(); 
  const nav = useNavigate();
  const { loggedInUser, setLoggedInUser } = useContext(MainContext);  

  function SignOutUser() {
    nav("/home");
    setLoggedInUser(null);
    
  }

  return (
    <div className="NavbarComp d-flex row">
        {/* if user neither registered, nor logged in, then "login" and "register" links are shown */}
        {(!loggedInUser && location.pathname !=="/login") && <Link to="/login">Log In</Link>}
        {(!loggedInUser && location.pathname !=="/register") && <Link to="/register">New User? Sign Up</Link>}   
        {location.pathname !=="/home" && <Link to="/home">Home</Link>} 
        {location.pathname !=="/" && <Link to="/home">Home</Link>}           
        {(loggedInUser && location.pathname !=="/enter-text") && <Link to="/enter-text">Text to GIF</Link>}
        {/* {location.pathname !=="/all-topics" && <Link to="/all-topics">Topics</Link>} */}
        
        { loggedInUser && 
          <div className="userStats d-flex row">
            <div className="mr40">Username: {loggedInUser.userName}            
            </div>
            <div onClick={SignOutUser}>Sign Out
            </div>
          </div>
        }                             
    </div>
  )
}

export default NavbarComp;