import './main.css'
import React from 'react'

const Final = ({ reset }) => {
  return (
    <div className='final'>
        <h2>Thank you for using the Bridge Sales Enablement Agency calculator. A representative will be in touch with you soon.</h2>
        <button className='restart-button' onClick={reset}>
          Restart
        </button>
    </div>
  )
}

export default Final