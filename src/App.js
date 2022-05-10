import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { MainContext } from './context/MainContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import EnterTextPage from './pages/EnterTextPage';
import HeaderComp from './components/HeaderComp//HeaderComp';
import NavbarComp from './components/NavbarComp/NavbarComp';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);  // registered and|or logged-in user's name

  return (
    <div className="App"> 
      <MainContext.Provider value={{ loggedInUser, setLoggedInUser }}>  
        <BrowserRouter>
        <HeaderComp /> 
        <NavbarComp />       
        <Routes>
          <Route path='/'             element={<HomePage />} />      {/* HomePage links: register, login, enter text menu */}
          <Route path='/home'         element={<HomePage />} />      {/* HomePage links: register, login, enter text menu */}
          <Route path='/register'     element={<RegisterPage />} />  {/* RegisterPage for sign-up of a new user */}
          <Route path='/login'        element={<LoginPage />} />     {/* LoginPage for log in of an existing user */}
          <Route path='/enter-text'   element={<EnterTextPage />} /> {/* EnterTextPage for entering text */}
        </Routes> 
        </BrowserRouter>
      </MainContext.Provider>        
  </div>
  );
}

export default App;
