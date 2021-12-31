import React from 'react';
import Tour from './Tour';
const Tours = ({tours}) => {
    return (
        <section>
        <div className='title'>
            <h2>our tours</h2>
            <div className='underline'></div>
        </div>
        <div>
            {
                tours.map((tour)=> (
                    <Tour name={tour.name} info={tour.info} image={tour.image} price={tour.price} key={tour.id}/>
                ))
            }
        </div>
            </section>
    )
};

export default Tours;