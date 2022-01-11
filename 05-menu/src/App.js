import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [selectedCategory, setSelectedCategory] = useState ('all')

  //collect categories info
  let allCategories = ['all', ...new Set(items.map((item)=>item.category))]

  //set category after clicking catefory button
  const filterMenu = (category) => {
    if (category==='all'){
      setSelectedCategory('all')
      // console.log(allCategories)
    }else{
      setSelectedCategory(category)
    }
  }

  //conditional rendering
  const MenuSection = () => {
    if(selectedCategory === 'all'){
      return (
        items.map((item)=>
        <Menu title={item.title} price={item.price} info={item.desc} category={item.category} image={item.img} key={item.id}/>)
      )
    }
    return(
      items.map((item)=>
      item.category === selectedCategory ? <Menu title={item.title} price={item.price} info={item.desc} category={item.category} image={item.img} key={item.id}/> : '')
    )
  }


  return (
    <main className='menu'>
      <h2 className='title'>Our Menu</h2>
      <div className='underline'></div>
      <Categories onClick={filterMenu} categories={allCategories}/>
      <section className='section-center'>
        <MenuSection/>
      </section>
    </main>
  );
}

export default App;