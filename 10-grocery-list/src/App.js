import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const[list, setList] = useState([])
  const[item, setItem] = useState('')
  const[buttonText, setButtonText] = useState('add')
  const[itemToEdit, setItemToEdit] = useState()
  
  const onSubmit =(e)=> {
    e.preventDefault();

    if(buttonText==='add'){
      //add new item
      list.push(item);
      setList(list);
      console.log(list);
    }else{
      //edit existing item
      list[itemToEdit]=item;
      setList(list);
      console.log(list);
      setButtonText('add')
    }
    //rest form
    setItem('');
    
  }

  const onEdit =(item, index)=>{
    setItem(item);
    setButtonText('Edit');
    //locate item by index
    console.log(index);
    setItemToEdit(index);
  }

  return <section className='section-center'>
  <Alert/>
  
  <div className='grocery-form'>
    <h3>Grocery List</h3>
    <form className='form-control' onSubmit={onSubmit}>
      <input
        className='grocery'
        type='text'
        value={item}
        placeholder='e.g. apples'
        onChange={(e)=>setItem(e.target.value)}/>
      <button type='submit' className='submit-btn'>{buttonText}</button>
    </form>
  </div>

  {/* rendering list items only when list is not empty */}
  {list.length>0 && <div className='grocery-container'>
  {list.map((item, index)=>(<List key={index} item={item} index={index} Edit={onEdit}/>))}
  </div>}

  {/* rendering clear all button only when list is not empty */}
  {list.length>0 && <button className='clear-btn' onClick={(e)=>setList([])}>clear all</button>}
</section>
  
}

export default App