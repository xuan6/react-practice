import React from 'react';

const Menu = ({image, title, category, price, info}) => {
  return (
      <div className='menu-item'>
        <img className='photo' src={image} alt={title}/>
        <header className='item-info'>
            <h4>{title}</h4>
            <h4>{price}</h4>
        </header>
        <p className='item-text'>{info}</p>
      </div>
      );
};

export default Menu;