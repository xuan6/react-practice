const Buttons = ({jobs, onNav, selectedID}) => {
    return (
        <div className='btn-container' >
            {jobs.map((job)=>
                <button onClick={()=>onNav(job.id)} key={job.id}
                className={`job-btn ${job.id===selectedID && 'active-btn'}`}
                >{job.company}</button>
                )}
        </div>
    )

}

export default Buttons