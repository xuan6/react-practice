import React, { useState } from 'react';
import {FaPlus, FaMinus} from "react-icons/fa"; 
function Question({title, info}) {
  //toggle answer visibility
  const [visibility, setVisibility] = useState(false)
  const [icon, setIcon] = useState(<FaPlus/>)

  const onClick = () =>{
    setVisibility(!visibility)
    if (visibility){
      setIcon(<FaPlus/>)
    }else{
      setIcon(<FaMinus/>)
    }
  }


    
  
  return (
    <div className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={onClick}>{icon}</button>
      </header>
      {visibility?<p>{info}</p>:''}
    </div>
  );
}

export default Question;