import React, { useState } from 'react';
import {FaPlus, FaMinus} from "react-icons/fa"; 
function Question({title, info}) {
  //toggle answer visibility
  const [visibility, setVisibility] = useState(false)
  const onClick = () =>{
    setVisibility(!visibility)
  }


    
  
  return (
    <div className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={onClick}>
          {visibility?<FaMinus/>:<FaPlus/>} 
        </button>
      </header>
      {visibility?<p>{info}</p>:''}
    </div>
  );
}

export default Question;