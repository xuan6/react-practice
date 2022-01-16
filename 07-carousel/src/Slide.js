import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Slide = ({data}) => {
    return (
        <article className='section-center'>
        {data.map((people)=>(
        <div key={people.id}>
        <FiChevronLeft className='prev'/>
          <img className='person-img' src={people.image} alt={people.name}/>
          <h4>{people.name}</h4>
          <p>{people.title}</p>
          <p className='text'>{people.quote}</p>
          <FaQuoteRight className='icon' />
          <FiChevronRight className='next' />
        </div>
        ))}
      </article>
    )
}

export default Slide