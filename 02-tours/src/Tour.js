import React, { useState } from 'react';

const Tour = ({id, name, info, price, image, onDelete}) => {
    const onClick =()=>{
        onDelete(id)   
    }

    return (
      <article className='single-tour'>
        <img src={image} alt={name}/>
        <footer>
            <div className='tour-info'>
                <h4>{name}</h4>
                <h4 className='tour-price'>{price}</h4>
            </div>
            <p>{info}</p>
            <button className='delete-btn' onClick={onClick}>not interested</button>
        </footer>
        
      </article>
  );
};

export default Tour;