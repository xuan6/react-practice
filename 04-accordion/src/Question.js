import React, { useState } from 'react';
function Question({title, info}) {
  //toggle answer visibility
  const [visibility, setVisibility] = useState(false)
  const onClick = () =>{
    setVisibility(!visibility)
  }

  return (
    <div className='question'>
      <div className='header'>
        <h4>{title}</h4>
        <button className='btn' onClick={onClick}></button>
      </div>
      {visibility?<p>{info}</p>:''}
    </div>
  );
}

export default Question;