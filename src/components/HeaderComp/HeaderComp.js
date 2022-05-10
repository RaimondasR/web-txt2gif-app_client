import React from 'react';
import './HeaderCSS.css';

const HeaderComp = () => {
  return (
    <div className="HeaderComp d-flex a-center">
      <div className="d-flex row a-flex-end"> 
        <div className="fs26"><b>Web Text to GIF Application</b></div> 
        <div className="fs18 ml50 mb3"><b>web-text2gif-app</b></div>   
      </div>  
    </div>
  )
}

export default HeaderComp;