import React from 'react';

const Categories = ({onClick, categories}) => {
    const filter = (category) => {
        onClick(category)
    }

    return (
        <div className='btn-container'>
            {categories.map((category) => {return(
                <button className='filter-btn'
                onClick={()=>filter(category)}
                key={category}>
                {category}
                </button>
                )})
            }
        </div>
    );
};

export default Categories;