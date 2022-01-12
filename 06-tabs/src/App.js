import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import Buttons from './Buttons'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [jobs, setJobs] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  //fetch data
  
  const fetchData = async() => {
    const res = await fetch(url)
    const data = await res.json()
    setJobs(data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  //show the first people in the data set by default
  
  
  const JobBlock = () => {
    const job = jobs.filter((job, index)=>index===selectedIndex)[0]
    return(
      <div className='job-info'>
        <h4>{job.title}</h4>
        <p className='job-date'>{job.dates}</p>
          {job.duties.map((duty)=>
            <div className='job-desc'>
              <FaAngleDoubleRight className='job-icon'/>
              <p>{duty}</p>
            </div>
            )}
      </div>
    )
  }

  const navigation = (index) => {
    setSelectedIndex(index)
  }


  return (
    <main className='section'>
      {jobs?
      <div className='jobs-center'>
        <Buttons jobs={jobs} onNav={navigation} selectedIndex={selectedIndex}/>
        <JobBlock />
      </div>
      :
      <h2>Loading...</h2>}
      
    </main>
  )
}

export default App