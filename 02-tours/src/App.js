import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'





function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([]) //set a empty variable to store tours data

  const fetchData = async()=>{
    const res = await fetch(url)
    const data  = await res.json()
    setTours(data)
    setLoading(false)
    console.log(data)
  }

  useEffect(()=>{
    fetchData()
  },[]  
  )

  return (
    <main>
      {loading?<Loading/>:<Tours tours={tours}/>}
    </main>
  )
}

export default App