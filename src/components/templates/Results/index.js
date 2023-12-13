import React, { useEffect } from 'react'
import './main.css'
import backPlay from '../../../media/back-play.svg'

const Results = ({
  back, 
  sendReport, 
  calculateResults,
  suplierAndProduct,
  quotationToOrderProcess,
  expeditingAndRecivingOrders,
  processingInvoices,
  payingSuppliers,
  totalProcessCost,
}) => {

  useEffect(() => {
    calculateResults();
  },[])

  return (
    <>
      <div className="left-content">
        <h2>By utilising the Bridge Sales Enablement Agency calculator organisations can   simplify the processes associated with indirect procurement and unlock significant typical savings of up to 60% of process costs.
        </h2>
        <p>
          Based on what you have told us about your process we can estimate that the following costs are being insured within your procurement processes.
        </p>
        <button className="continue-button" onClick={back}>
          <div className="button-content"> 
            <img src={backPlay} alt="back icon" className="back-svg-container" />
            <p>Go Back</p>
          </div>
        </button>
      </div>
      <div className="right-content">
        <div className="result-pill">
          <div className="left-pill-content">
            Supplier & product
          </div>
          <div className="right-pill-content">
            £ {parseFloat(suplierAndProduct).toFixed(2)}
          </div>
        </div>
        <div className="result-pill">
          <div className="left-pill-content">
            Quotation to order process
          </div>
          <div className="right-pill-content">
            £ {parseFloat(quotationToOrderProcess).toFixed(2)}
          </div>
        </div>
        <div className="result-pill">
          <div className="left-pill-content">
            Expediting & receiving orders
          </div>
          <div className="right-pill-content">
            £ {parseFloat(expeditingAndRecivingOrders).toFixed(2)}
          </div>
        </div>
        <div className="result-pill">
          <div className="left-pill-content">
            Processing invoices
          </div>
          <div className="right-pill-content">
            £ {parseFloat(processingInvoices).toFixed(2)}
          </div>
        </div>
        <div className="result-pill">
          <div className="left-pill-content">
            Paying suppliers
          </div>
          <div className="right-pill-content">
            £ {parseFloat(payingSuppliers).toFixed(2)}
          </div>
        </div>
        <div className="result-pill purple-pill">
          <div className="left-pill-content">
            Total Process Costs (year)
          </div>
          <div className="right-pill-content">
            £ {parseFloat(totalProcessCost).toFixed(2)}
          </div>
        </div>
        <button className='send-button' onClick={sendReport}>
          Send me this report
        </button>
      </div>
    </>
  )
}

export default Results