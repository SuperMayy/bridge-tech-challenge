import React, { useState } from 'react'
import './main.css'
import leftArrow from '../../../media/left-arrow.svg'
import rightArrow from '../../../media/right-arrow.svg'

const InputValues = ({ question, QuestionNumber, next, back}) => {
  const [inputValue, setInputValue] = useState(null);

  return (
    <div className="question-content">
      <div className="question-section">
        <div className="navigation-arrow" onClick={back}>
            <img className='arrow' src={leftArrow} alt="left-arrow"/>
        </div>
        <div className='question-text'>
          <p className="question">{question}</p>
          <p className='question-count'>
            <i className='bold'>{QuestionNumber} </i> 
            of 
            <i className='bold'> 3</i>
          </p>
        </div>
        <div className="navigation-arrow" onClick={() => next(inputValue)} >
            <img className='arrow' src={rightArrow} alt="right arrow" />
        </div>
      </div>
      <form>
        <input 
          type="number"
          onChange={(e) => setInputValue(Number(e.target.value))} 
        />
      </form>
    </div>
  )
}

export default InputValues