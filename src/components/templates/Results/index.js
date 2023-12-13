import React, { useState, useEffect } from 'react'
import './main.css'
import backPlay from '../../../media/back-play.svg'

const Results = ({
  back, 
  sendReport, 
  identityRequirement,
  payProvider,
  findProducts,
  raiseOrder,
  authoriseSale,
  placeOrder,
  questionTwo,
  questionThree,
  requestQuotation,
  deliverProduct,
  questionOne,
  invoiceCheck,
}) => {

  const [suplierAndProduct, setSuplierAndProduct] = useState(null);
  const [quotationToOrderProcess, setQuotationToOrderProcess] = useState(null);
  const [expeditingAndRecivingOrders, setExpeditingAndRecivingOrders] = useState(null);
  const [processingInvoices, setProcessingInvoices] = useState(null);
  const [payingSuppliers, setPayingSuppliers] = useState(null);
  const [totalProcessCost, setTotalProcessCost] = useState(null)

  useEffect(() => {
    setSuplierAndProduct((identityRequirement + requestQuotation) * questionTwo)
  }, [identityRequirement, requestQuotation, questionTwo]);

  useEffect(() => {
    setQuotationToOrderProcess((findProducts + raiseOrder + authoriseSale + payProvider) * questionTwo)
  }, [findProducts, raiseOrder, authoriseSale, payProvider, questionTwo]);

  useEffect(() => {
    setExpeditingAndRecivingOrders(deliverProduct * questionOne)
  }, [deliverProduct, questionOne]);

  useEffect(() => {
    setProcessingInvoices(invoiceCheck * questionTwo)
  }, [invoiceCheck, questionTwo]);

  useEffect(() => {
    setPayingSuppliers(placeOrder * questionThree)
  }, [placeOrder, questionThree]);

  useEffect(() => {
    setTotalProcessCost(suplierAndProduct +
      quotationToOrderProcess +
      expeditingAndRecivingOrders +
      processingInvoices +
      payingSuppliers)
  }, [suplierAndProduct, quotationToOrderProcess, expeditingAndRecivingOrders, processingInvoices, payingSuppliers]);

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
            £ {(identityRequirement + requestQuotation) * questionTwo}
          </div>
        </div>
        <div className="result-pill">
          <div className="left-pill-content">
            Quotation to order process
          </div>
          <div className="right-pill-content">
            £ {(findProducts + raiseOrder + authoriseSale + payProvider) * questionTwo}
          </div>
        </div>
        <div className="result-pill">
          <div className="left-pill-content">
            Expediting & receiving orders
          </div>
          <div className="right-pill-content">
            £ {deliverProduct * questionOne}
          </div>
        </div>
        <div className="result-pill">
          <div className="left-pill-content">
            Processing invoices
          </div>
          <div className="right-pill-content">
            £ {invoiceCheck * questionTwo}
          </div>
        </div>
        <div className="result-pill">
          <div className="left-pill-content">
            Paying suppliers
          </div>
          <div className="right-pill-content">
            £ {placeOrder * questionThree}
          </div>
        </div>
        <div className="result-pill purple-pill">
          <div className="left-pill-content">
            Total Process Costs (year)
          </div>
          <div className="right-pill-content">
            £ {totalProcessCost}
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