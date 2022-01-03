import React from 'react';
import Review from './Review';
import reviews from './data.js'
import {useState} from 'react'

function App() {
  let maxIndex = reviews.length-1
  const [pageIndex,setPageIndex] = useState(0)
  // const [currentReview, setCurrentReview] = useState(reviews[0])
  const currentReview = reviews[pageIndex]

  //function to define next page
  const nextPage = () => {
    if(pageIndex<maxIndex){
      setPageIndex(pageIndex+1);
    }else{//circle back to the first review
      setPageIndex(0);
    }
  }

  //function define previous page
  const prevPage = () => {
    if(pageIndex>0){
      setPageIndex(pageIndex-1)
    }else{//circle back to the last review
      setPageIndex(maxIndex)
    }
  }

  //function to define random page
  const randomPage =() => {
    setPageIndex(Math.floor(Math.random()*(maxIndex+1)))

  }

  

  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>Reviews</h2>
          <div className='underline'></div>
        </div>
        <Review showNext={nextPage} showPrev={prevPage} showRandom={randomPage} current={currentReview}/>
      </section>
      
    </main>
    ); 
}

export default App;