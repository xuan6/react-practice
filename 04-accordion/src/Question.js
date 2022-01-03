import React, { useState } from 'react';
function Question({title, info}) {
  return (
    <div className='question'>
      <div className='header'>
        <h4>{title}</h4>
        <button className='btn'></button>
      </div>
      <p>{info}</p>
    </div>
  );
}

export default Question;