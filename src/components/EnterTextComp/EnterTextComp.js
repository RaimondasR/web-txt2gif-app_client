import React, { useRef, useState } from 'react';
import http from '../../plugins/http';
import { useNavigate } from "react-router-dom";
import './EnterTextCSS.css';

const EnterTextComp = () => {
  const nav = useNavigate();
  const [message, setMessage] = useState(null);

  const refs = { 
    textRef: useRef()   
  }  

  async function enterText () {
    const textData = {    
      textEntered: refs.textRef.current.value // text to enter
    } 
    
    http.post(textData, "enter-text")
      .then((res) => {
        setMessage({success: res.success, message: res.message});
        if (res.success) {
          console.log("res:",res);
          console.log("res.id:",res.id);
          const id = res.id;
          setMessage(null);
        //   nav(`/text/${id}/${refs.textRef.current.value}`)
        }
      })
  };

  return (
    <div className="EnterTextComp d-flex column">
  
      <div className="enter-text-div d-flex column a-center">

        <div className="sign-div d-flex a-center fs20"><b>IBM Watson Natural Language Service</b></div>
        <div className="sign-div d-flex a-center fs20"><b>Text Submit Form</b></div>
                    
        <div className="sign-div d-flex a-flex-end mt10 mb0 fs14">
          <div className="c-gray mr5"><b>Your Text</b></div>
          <div className="c-red fs11 mb2"><b>REQUIRED</b></div>              
        </div>

        <textarea className="msg-inp" ref={refs.textRef} placeholder="Type or copy-paste your text here...">            
        </textarea>
                  
        <div className="sign-div d-flex center mt30">
          <button onClick={enterText}>Enter Text</button>
        </div>

        {message && <div className="msg-div d-flex center mt15">{message.message}</div>} 
      </div>
    </div>
  );
};

export default EnterTextComp;