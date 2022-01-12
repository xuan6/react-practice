const Buttons = ({jobs, onNav, selectedIndex}) => {
    return (
        <div className='btn-container' >
            {jobs.map((job, index)=>
                <button onClick={()=>onNav(index)} key={job.id}
                className={`job-btn ${index===selectedIndex && 'active-btn'}`}
                >{job.company}</button>
                )}
        </div>
    )

}

export default Buttons