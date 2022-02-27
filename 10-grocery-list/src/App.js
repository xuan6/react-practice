import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const[list, setList] = useState([])
  const[item, setItem] = useState('')
  const[buttonText, setButtonText] = useState('add')
  const[itemToEdit, setItemToEdit] = useState()
  const[alertState, setAlertState] = useState('')
  
  const onSubmit =(e)=> {
    e.preventDefault();

    if(buttonText==='add'){
      list.push(item); //add new item
      setList(list); //update list
      setAlertState('add') //update aleart style
    }else{
      //edit existing item
      list[itemToEdit]=item; //update item by item
      setList(list); //update list
      setButtonText('add'); //reset button string to default
      setAlertState('edit'); //updte alert style
    }
    //rest form
    setItem('');
    
  }
  //dismiss alert by reseting alert state to control alert visibility
  const resetAlert =()=>{
    setAlertState('');
  }

  const onEdit =(item, index)=>{
    setButtonText('Edit'); //update button string to match context
    setItem(item); //let the input field render the item data
    setItemToEdit(index); //locate item by index, then update item in onSubmit function
  }

  const onDelete =(index)=>{
    list.splice(index,1);//remove item by index
    setList(list);//update list
    setAlertState('delete');//update alert style
  }

  return <section className='section-center'>
  <Alert state={alertState} dismiss={resetAlert}/>
  
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
  {list.map((item, index)=>(<List key={index} item={item} index={index} editItem={onEdit} deleteItem={onDelete}/>))}
  </div>}

  {/* rendering clear all button only when list is not empty */}
  {list.length>0 && <button className='clear-btn'
  onClick={(e)=>{
    setList([]);
    setAlertState('clear');
  }}>clear all</button>}
</section>
  
}

export default App