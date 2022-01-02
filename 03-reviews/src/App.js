import React from 'react';
import Review from './Review';
import reviews from './data.js'
import {useState} from 'react'

function App() {
  let reviewCount = reviews.length
  const [page,setPage] = useState(0)

  //function to get the date of the current review to be shown
  const [currentReview, setCurrentReview] = useState(reviews[page])
  const showReview = (reviews) => {
    const current = reviews.filter((review)=>review.id===page)
    setCurrentReview(current)
  }

  //function to define next page
  const nextPage = () => {
    if(page<reviewCount){
      setPage(page+1)
      showReview(reviews)
    }else{//circle back to the first review
      setPage(0)
      showReview(reviews)
    }
  }

  //function define previous page
  const prevPage = () => {
    if(page>=0){
      setPage(page-1)
      showReview(reviews)
    }else{//circle back to the last review
      setPage(reviewCount-1)
      showReview(reviews)
    }
  }

  //function to define random page
  const randomPage =() => {
    setPage(Math.floor(Math.random()*reviewCount))
    showReview(reviews)
  }

  

  return <Review showNext={nextPage} showPrev={prevPage} showRandom={randomPage} current={currentReview}/>; 
}

export default App;