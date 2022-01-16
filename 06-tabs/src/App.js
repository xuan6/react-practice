import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import Buttons from './Buttons'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [jobs, setJobs] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedID, setSelectedID] = useState('')
  const [loading, setLoading] = useState(true)
  //fetch data
  const fetchData = async() => {
    const res = await fetch(url)
    const data = await res.json()
    setJobs(data)
    setSelectedID(data[0].id)
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
    // console.log(jobs)
    // console.log(selectedID)
  },[])

  //show the first people in the data set by default

  //my solution: rendering by job id
  const JobBlock = () => {
      console.log(jobs)
      console.log(selectedID)
      //filter will return an array as a result, to access its value, we need to access the index 0
      const job = jobs.filter((job)=>job.id===selectedID)[0]
      console.log(job)
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
  const navigation = (id) => {
    setSelectedID(id)
  }

  //tutorial solution: rendering by index

  // const JobBlock = () => {
  //   const job = jobs.filter((job, index)=>index===selectedIndex)[0]
  //   return(
  //     <div className='job-info'>
  //       <h4>{job.title}</h4>
  //       <p className='job-date'>{job.dates}</p>
  //         {job.duties.map((duty)=>
  //           <div className='job-desc'>
  //             <FaAngleDoubleRight className='job-icon'/>
  //             <p>{duty}</p>
  //           </div>
  //           )}
  //     </div>
  //   )
  // }
  // const navigation = (index) => {
  //   setSelectedIndex(index)
  // }


  return (
    <main className='section'>
      {!loading?
      <div className='jobs-center'>
        <Buttons jobs={jobs} onNav={navigation} selectedID={selectedID}/>
        <JobBlock />
      </div>
      :
      <h2>Loading...</h2>}
      
    </main>
  )
}

export default App