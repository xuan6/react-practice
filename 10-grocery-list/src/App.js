import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const[list, setList] = useState([])
  const[item, setItem] = useState('')
  
  const addItem =(e)=> {
    e.preventDefault();

    //add new item
    list.push(item);
    setList(list);
    console.log(list);

    //rest form
    setItem('');
  }

  const ListView =()=> {
    return <div className='grocery-container'>
    {list.map((item, index)=>(<List key={index} item={item}/>))}
    </div>
  }

  return <section className='section-center'>
  <Alert/>
  <div className='grocery-form'>
    <h3>Grocery List</h3>
    <form className='form-control' onSubmit={addItem}>
      <input
        className='grocery'
        type='text'
        value={item}
        placeholder='e.g. apples'
        onChange={(e)=>setItem(e.target.value)}/>
      <button type='submit' className='submit-btn'>add</button>
    </form>
  </div>
  {list.length>0 && <div className='grocery-container'>
  {list.map((item, index)=>(<List key={index} item={item}/>))}
  </div>}
  {list.length>0 && <button className='clear-btn' onClick={(e)=>setList([])}>clear</button>}
</section>
  
}

export default App