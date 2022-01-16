import React, { useState, useEffect } from 'react';
import data from './data';
import Slide from './Slide';

function App() {
  //the index of the slide to be dislplayed
  const[index, setIndex] = useState(0)
  let count = data.length

  //click the next button will slide to the next page
  const goToNext = (currentIndex) => {
    if (currentIndex===count-1){
      setIndex(0)
    }else{
      setIndex(index+1)
    }
  }

  //click the prev button will slide to the neprevxt page
  const goToPrev = (currentIndex) => {
    if (currentIndex===0){
      setIndex(count-1)
    }else{
      setIndex(index-1)
    }
  }
  
  return (
    <main className='section'>
      <div className='title'>
        <h2><span>/</span>Reviews</h2>
      </div>
      <Slide data={data} targetedIndex={index} prev={goToPrev} next={goToNext}/>
    </main>
  );
}

export default App;