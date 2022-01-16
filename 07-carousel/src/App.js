import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import data from './data';
import Slide from './Slide';
function App() {
  
  return (
    <main className='section'>
      <div className='title'>
        <h2><span>/</span>Reviews</h2>
      </div>
      <Slide data={data}/>
    </main>
  );
}

export default App;