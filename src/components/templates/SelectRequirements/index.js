import './main.css'
import React, { useEffect } from 'react'
import { gsap } from 'gsap/gsap-core'
import Pill from '../../compound/pill'
import play from '../../../media/play.svg'

const SelectRequirements = ({ 
  next, 
  setIdentityRequirement, 
  identityRequirement, 
  requestQuotation, 
  findProducts,
  raiseOrder,
  authoriseSale,
  payProvider,
  deliverProduct,
  invoiceCheck,
  placeOrder
}) => {

  useEffect(() => {
    gsap.fromTo( ".pill-column",{ x: 100 }, { x: 0 });
    gsap.fromTo( ".continue-button",{duration: 2, backgroundColor: '#5F259F', }, { duration: 2, backgroundColor: '#DB2F20' });
  }, []);

  return (
    <>
        <div className="pill-column">
          <Pill title="Identify requirements" price="6.00" value={6} 
            event="IDENTITY_REQUIRMENTS_SELECTED"
            action={(event, value) => setIdentityRequirement(event, value)}
          />
          <Pill title="Raise an order" price="6.00" value={6}
            event="RAISE_ORDER_SELECTED"
            action={(event, value) => setIdentityRequirement(event, value)}
          />
          <Pill title="Deliver product" price="4.30" value={4.3}
            event="DELIVERY_PRODUCT_SELECTED"
            action={(event, value) => setIdentityRequirement(event, value)}
          />
        </div>
        <div className="pill-column">
          <Pill title="Request a quotation" price="3.00" value={3} 
            event="REQUEST_QUOTATION_SELECTED"
            action={(event, value) => setIdentityRequirement(event, value)}
          />
          <Pill title="Authorise sale" price="21.55" value={21.55} 
            event="AUTHORISE_SALE_SELECTED"
            action={(event, value) => setIdentityRequirement(event, value)}
          />
          <Pill title="Invoice check" price="6.00" value={6} 
            event="INVOICE_CHECK_SELECTED"
            action={(event, value) => setIdentityRequirement(event, value)}
          />
          <div className="total-pill">
            <p className="pill-title total">TOTAL</p>
            <div className="price">
              <p className="total-number">£
              {parseFloat(identityRequirement
                +requestQuotation 
                + findProducts 
                + raiseOrder 
                + authoriseSale 
                + payProvider 
                + deliverProduct 
                + invoiceCheck 
                + placeOrder).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
        <div className="pill-column">
          <Pill title="Find products" price="16.00" value={16} 
            event="FIND_PRODUCTS_SELECTED"
            action={(event, value) => setIdentityRequirement(event, value)}
          />
          <Pill title="Pay provider" price="13.00" value={13} 
            event="PAY_PROVIDER_SELECTED"
            action={(event, value) => setIdentityRequirement(event, value)}
          />
          <Pill title="Place order" price="6.50" value={6.5} 
            event="PLACE_ORDER_SELECTED"
            action={(event, value) => setIdentityRequirement(event, value)}
          />
          <div className="button-container">
            <button className="continue-button" onClick={next}>
              <div className="button-content"> 
                <p>Continue</p>
                <img src={play} alt="play icon" className="svg-container" />
              </div>
            </button>
          </div>
        </div>
    </>
  )
}

export default SelectRequirements