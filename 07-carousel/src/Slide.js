import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Slide = ({data, targetedIndex, prev, next}) => {
    
    return (
        <div className='section-center'>
        {data.map((people, index) => {
                let position = 'nextSlide';
                if(index===targetedIndex){
                    position = 'activeSlide'
                }
                if (index===targetedIndex-1 || (targetedIndex===0 && index===data.length-1)){
                    position= 'lastSlide'
                }
                return (
                    <article key={people.id} className={position}>
                        <img className='person-img' src={people.image} alt={people.name}/>
                        <h4>{people.name}</h4>
                        <p>{people.title}</p>
                        <p className='text'>{people.quote}</p>
                        <FaQuoteRight className='icon' />
                    </article>
                )
            })}
        <button className='prev' onClick={()=>prev(targetedIndex)} ><FiChevronLeft /></button>
        <button className='next' onClick={()=>next(targetedIndex)} ><FiChevronRight /></button>
      </div>
    )
}

export default Slide