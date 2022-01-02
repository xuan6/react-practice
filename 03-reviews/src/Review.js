import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import reviews from './data';

const Review = ({showNext, showPrev, showRandom, current}) => {
  return (
    <section className='container'>
      <div className='review'>
        <div className='img-container'>
          <img className='person-img' src={current.image} alt={current.name}/>
        </div>
        <h2>{current.name}</h2>
        <p>{current.job}</p>
        <p>{current.text}</p>
        <button onClick={showNext} >next</button>
        <button onClick={showPrev} >prev</button>
        <button onClick={showRandom} >surprise!</button>
      </div>
    </section>
  );
};

export default Review;