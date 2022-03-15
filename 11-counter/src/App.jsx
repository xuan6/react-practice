import './index.css';
import React, {useState, useEffect} from 'react';
import {FaPlus, FaMinus} from 'react-icons/fa'
import Reorder from './Reorder.jsx'

function App() {

  const[count, setCount] = useState(0)
  const[disable, setDisable] = useState(false)
  const[styleMinus, setStyleMinus] = useState('btn btn-disabled')
  const[styleReorder, setStyleReorder] = useState('btn reorder-visible')

  const addCount =()=>{
    setCount(count+1);
  }

  const minusCount =()=>{
    if(count===0){
      setStyleMinus('btn btn-disabled');
      setDisable(true);
    }else{
      setCount(count-1);
    }
  }

  const reorderInv =()=>{ 
    setCount(5);
  }

  useEffect(()=>{
    if(count>0){
      setStyleReorder('btn reorder-hidden');
      setStyleMinus('btn');
      setDisable(false);
    }else{
      setStyleReorder('btn reorder-visible');
      setStyleMinus('btn btn-disabled');
      setDisable(true);
    }
  },[count])

  return (
    <div className="main">
      <h2 className='count'>Inventory: {count}</h2>
      <div className='button-group'>
        <button className={`${styleMinus}`} onClick={minusCount} disabled={disable}><FaMinus/></button>
        <button className='btn' onClick={addCount}><FaPlus/></button>
        <Reorder reorder={reorderInv} style={styleReorder} disabled={disable}/>
      </div>
    </div>
  );
}

export default App;
