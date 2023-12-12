import './main.css'
import React from 'react'
import Tick from '../../atom/Tick'
import play from '../../../media/play.svg'

const SelectRequirements = () => {
  return (
    <>
        <div className="pill-column">
          <div className="pill">
            <Tick />
            <p className="pill-title">Identify requirements</p>
            <div className="price">
              <p className="estimate">ESTIMATE</p>
              <p className="price-number">£6.00</p>
            </div>
          </div>
          <div className="pill">
            <Tick />
            <p className="pill-title">Request a quotation</p>
            <div className="price">
              <p className="estimate">ESTIMATE</p>
              <p className="price-number">£6.00</p>
            </div>
          </div>
          <div className="pill">
            <Tick />
            <p className="pill-title">Find products</p>
            <div className="price">
              <p className="estimate">ESTIMATE</p>
              <p className="price-number">£6.00</p>
            </div>
          </div>
        </div>
        <div className="pill-column">
          <div className="pill">
            <Tick />
            <p className="pill-title">Identify requirements</p>
            <div className="price">
              <p className="estimate">ESTIMATE</p>
              <p className="price-number">£6.00</p>
            </div>
          </div>
          <div className="pill">
            <Tick />
            <p className="pill-title">Request a quotation</p>
            <div className="price">
              <p className="estimate">ESTIMATE</p>
              <p className="price-number">£6.00</p>
            </div>
          </div>
          <div className="pill">
            <Tick />
            <p className="pill-title">Find products</p>
            <div className="price">
              <p className="estimate">ESTIMATE</p>
              <p className="price-number">£6.00</p>
            </div>
          </div>
          <div className="total-pill">
            <p className="pill-title total">TOTAL</p>
            <div className="price">
              <p className="total-number">£0.00</p>
            </div>
          </div>
        </div>
        <div className="pill-column">
          <div className="pill">
            <Tick />
            <p className="pill-title">Identify requirements</p>
            <div className="price">
              <p className="estimate">ESTIMATE</p>
              <p className="price-number">£6.00</p>
            </div>
          </div>
          <div className="pill">
            <Tick />
            <p className="pill-title">Request a quotation</p>
            <div className="price">
              <p className="estimate">ESTIMATE</p>
              <p className="price-number">£6.00</p>
            </div>
          </div>
          <div className="pill">
            <Tick />
            <p className="pill-title">Find products</p>
            <div className="price">
              <p className="estimate">ESTIMATE</p>
              <p className="price-number">£6.00</p>
            </div>
          </div>
          <div className="button-container">
            <button className="continue-button">
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