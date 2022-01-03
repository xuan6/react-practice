import React, { useState } from 'react';
import Question from './Question.js'

const Questions = ({questions}) => {
    return (
        <div>
            {questions.map((question)=>(
                <Question title={question.title} info={question.info}/>
            ))}
        </div>
    )
}

export default Questions;