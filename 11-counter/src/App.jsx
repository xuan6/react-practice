import './index.css';
import React, {useState} from 'react';
import {FaPlus, FaMinus} from 'react-icons/fa'
import Reorder from './Reorder.jsx'

function App() {

  const[count, setCount] = useState(0)
  const[styleReorder, setStyleReorder] = useState('btn reorder-visible')

  const addCount =()=>{
    setCount(count+1);
  }

  const minusCount =()=>{
    if(count>0){
      setCount(count-1);
    }
  }

  const reorderInv =()=>{ 
    setCount(5);
    setStyleReorder('btn reordr-hidden')
  }

  return (
    <div className="main">
      <h2 className='count'>Inventory: {count}</h2>
      <div className='button-group'>
        <button className='btn' onClick={minusCount} disabled={!count}><FaMinus/></button>
        <button className='btn' onClick={addCount}><FaPlus/></button>
        <Reorder reorder={reorderInv} style={styleReorder} disabled={!count}/>
      </div>
    </div>
  );
}

export default App;
