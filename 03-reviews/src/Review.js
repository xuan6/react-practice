import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = ({showNext, showPrev, showRandom, current}) => {
  return (
      <article className='review'>
        <div className='img-container'>
          <img className='person-img' src={current.image} alt={current.name}/>
          <span className='quote-icon'><FaQuoteRight/></span>
        </div>
        <h4 className='author'>{current.name}</h4>
        <p className='job'>{current.job}</p>
        <p className='info'>{current.text}</p>
        <p>{current.id}</p>
        <div className='btn-group'>
          <button  className='prev-btn' onClick={showPrev} ><FaChevronLeft/></button>
          <button className='next-btn' onClick={showNext} ><FaChevronRight/></button>
        </div>
        <button className='random-btn' onClick={showRandom} >surprise!</button>
      </article>
  );
};

export default Review;