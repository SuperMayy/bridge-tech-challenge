import React from 'react'
import './main.css'
import play from '../../../media/play.svg'

const Results = () => {
  return (
    <>
      <div className="left-content">
        <h2>By utilising the Bridge Sales Enablement Agency calculator organisations can   simplify the processes associated with indirect procurement and unlock significant typical savings of up to 60% of process costs.
        </h2>
        <p>
          Based on what you have told us about your process we can estimate that the following costs are being insured within your procurement processes.
        </p>
        <button className="continue-button">
          <div className="button-content"> 
            <p>Go Back</p>
            <img src={play} alt="play icon" className="svg-container" />
          </div>
        </button>
      </div>
      <div className="right-content">
        <div className="result-pill">
          <div className="left-pill-content">
            Supplier & product
          </div>
          <div className="right-pill-content">
            £ 89,600.00
          </div>
        </div>
        <div className="result-pill">
          <div className="left-pill-content">
            Quotation to order process
          </div>
          <div className="right-pill-content">
            £ 89,600.00
          </div>
        </div>
        <div className="result-pill">
          <div className="left-pill-content">
            Expediting & receiving orders
          </div>
          <div className="right-pill-content">
            £ 89,600.00
          </div>
        </div>
        <div className="result-pill">
          <div className="left-pill-content">
            Processing invoices
          </div>
          <div className="right-pill-content">
            £ 89,600.00
          </div>
        </div>
        <div className="result-pill">
          <div className="left-pill-content">
            Paying suppliers
          </div>
          <div className="right-pill-content">
            £ 89,600.00
          </div>
        </div>
        <div className="result-pill purple-pill">
          <div className="left-pill-content">
            Total Process Costs (year)
          </div>
          <div className="right-pill-content">
            £ 89,600.00
          </div>
        </div>
        <button className='send-button'>
          Send me this report
        </button>
      </div>
    </>
  )
}

export default Results