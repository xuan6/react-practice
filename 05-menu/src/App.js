import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [visibility, setVisibility] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState ('all')

  const filterMenu = (category) => {
    if (category==='all'){
      setSelectedCategory('all')
    }else{
      setSelectedCategory(category)
    }

  }

  return (
    <main>
      <h2 className='title'>Our Menu</h2>
      <Categories onClick={filterMenu} category={selectedCategory}/>
      <secction className='menu'>
        {items.map((item)=><Menu title={item.title} price={item.price} info={item.desc} category={item.category} image={item.img} key={item.id}/>)}
      </secction>
    </main>
  );
}

export default App;