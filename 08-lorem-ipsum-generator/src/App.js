import React, { useState } from 'react';
import data from './data';

function App() {
  //set number of paragraph to generate
  const [number, setNumber] = useState(0)

  //store paragraph contents
  const[paragraphs, setParagraphs] = useState([])

  const onSubmit = (e) => {
    e.preventDefault()

    //set a local variable to store the new paragraphs data, which will be reset everytime when the form is submitted
    let updatedParagraphs = []

    //the amount of paragraph must be grater than 0
    if(number>0){
      //loop through X numbers of time to generate some random text
      for(let i=1; i<=number; i++){
        //choose random content for a paragraph
        let paragraph = data[Math.floor(Math.random()*(data.length-1))]
        // update paragraphs data
        updatedParagraphs.push(paragraph)
    }}else{
      alert('number must be greater than 0')
    }
    //assign the new paragraphs data to hooks
    //if directly set paragraphs data like setParagraphs(array.push(text)), it will return the number of parapraghs, not the array itself! 
    setParagraphs(updatedParagraphs)
  };

  const Content = () => {
      return(
        <div className='result'>
        {paragraphs.map((paragraph, index)=>(<p key={index}>{paragraph}</p>))}
        </div>
      )
  }
  
  return (
  <section className='section-center'>
    <h3>Lorem Ipsum Generator</h3>
    <form className='lorem-form' onSubmit={onSubmit}>
      <label>Paragragh:</label>
      <input type='number' name='amount' value={number} onChange={(e)=>setNumber(e.target.value)} />
      <button className='btn'>generate</button>
    </form>
    {paragraphs.length>0 && <Content/>}
  </section>
    )
}

export default App;