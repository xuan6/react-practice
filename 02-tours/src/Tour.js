import React, { useState } from 'react';

const Tour = ({id, name, info, price, image, onDelete}) => {
    const deleteTour =()=>{
        onDelete(id)   
    }

    const [btnText, setBtnText] = useState('show more')
    const [textTruncation, seTextTruncation] = useState(true)

    const toggleInfo =()=>{
        if (btnText === 'show more'){
            setBtnText('show less')
            seTextTruncation(false)
        }else{
            setBtnText('show more')
            seTextTruncation(true)
        }
    }

    return (
      <article className='single-tour'>
        <img src={image} alt={name}/>
        <footer>
            <div className='tour-info'>
                <h4>{name}</h4>
                <h4 className='tour-price'>${price}</h4>
            </div>
            <p>{textTruncation? `${info.substring(0,200)}...`:`${info}`}<button onClick={toggleInfo}>{btnText}</button></p>
            <button className='delete-btn' onClick={deleteTour}>not interested</button>
        </footer>
        
      </article>
  );
};

export default Tour;