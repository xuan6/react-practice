import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const defaultColors = new Values('#0aa672').all(10)
  const [color,setColor] = useState('');
  const [error,setError] = useState(false);
  const [list,setList] = useState(defaultColors)

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(color);
    
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }
  return (
  <main>
    <section className='container'>
      <h3>Color Generator</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={color}
          placeholder='#0aa672'
          onChange={(e)=>setColor(e.target.value)}
          className={`${error ? 'error' : null}`}
        />
        <button className='btn' type='submit' value='add'>submit
        </button>
      </form>
    </section>
    <section className='colors'>
      {list.map((color, index)=>{
        return <SingleColor index={index} key={index} {...color}/>
        // use {...color} to pass in all data in the object, we can specify in the sub component
      })}
    </section>
  </main>
  )
}
  

export default App