import React, { useState } from 'react';
import data from './data';
import Questions from './Questions';
function App() {

  return (
    <main>
      <div className='container'>
        <h3>Questions And Answers About Login</h3>
        <Questions questions={data}/>
      </div>
    </main>
  )
}

export default App;