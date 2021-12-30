import './index.css';
import data from './data.js'
import List from './List.js'
import {useState} from 'react'

function App() {
  const [people,setPeople] = useState(data)
  const clearData =()=>{
    // console.log(data)
    setPeople([])
  }
  return (
    <main>
      <section className='container'>
        <h3>{people.length} people birthdays today</h3>
        <List people={people} />
        <button onClick={clearData}>clear all</button>

      </section>
      
    </main>
  );
}

export default App;
