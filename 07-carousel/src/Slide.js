import { FaQuoteRight } from 'react-icons/fa';

const Slide = ({data}) => {
    return (
        <article className='section-center'>
        {data.map((people)=>(
        <div key={people.id}>
          <img className='person-img' src={people.image} alt={people.name}/>
          <h4>{people.name}</h4>
          <h4>{people.title}</h4>
          <p className='text'>{people.quote}</p>
          <FaQuoteRight className='icon' />
        </div>
        ))}
      </article>
    )
}

export default Slide