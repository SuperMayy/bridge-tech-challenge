import React from 'react'
import './main.css'
import leftArrow from '../../../media/left-arrow.svg'
import rightArrow from '../../../media/right-arrow.svg'

const InputValues = ({ question, QuestionNumber, inputValue}) => {
  return (
    <div className="question-content">
      <div className="question-section">
        <div className="navigation-arrow">
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
        <div className="navigation-arrow">
            <img className='arrow' src={rightArrow} alt="right arrow" />
        </div>
      </div>
      <form>
        <input />
      </form>
    </div>
  )
}

export default InputValues