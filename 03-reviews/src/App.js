import React from 'react';
import Review from './Review';
import reviews from './data.js'
import {useState, useEffect} from 'react'

function App() {
  let maxIndex = reviews.length-1
  const [pageIndex,setPageIndex] = useState(0)
  const [currentReview, setCurrentReview] = useState(reviews[0])


  // useEffect(()=>{
    
  // },[])

  const updateCurrent = (pageIndex)=>{
    const current = reviews[pageIndex]
    setCurrentReview(current)
    console.log(currentReview);
  }

  //function to define next page
  const nextPage = () => {
    if(pageIndex<maxIndex){
      setPageIndex(pageIndex+1);
      updateCurrent(pageIndex);
      
    }else{//circle back to the first review
      setPageIndex(0);
      updateCurrent(pageIndex);
    }
  }

  //function define previous page
  const prevPage = () => {
    if(pageIndex>0){
      setPageIndex(pageIndex-1)
      setCurrentReview(reviews[pageIndex])
      updateCurrent(pageIndex);
    }else{//circle back to the last review
      setPageIndex(maxIndex)
      setCurrentReview(reviews[pageIndex])
      updateCurrent(pageIndex);
    }
  }

  //function to define random page
  const randomPage =() => {
    setPageIndex(Math.floor(Math.random()*(maxIndex+1)))
    setCurrentReview(reviews[pageIndex])
    updateCurrent(pageIndex);
  }

  

  return (
    <main>
      <h3 className='title'>Reviews</h3>
      <div className='underline'></div>
      <Review showNext={nextPage} showPrev={prevPage} showRandom={randomPage} current={currentReview}/>
    </main>
    ); 
}

export default App;